import { useState, useEffect } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { usePatient } from "@/hooks/usePatient";
import { supabase, getMessages, sendMessage, submitRefillCheckin } from "@/lib/supabase";
import { MessageCircle, Package, RefreshCw, FileText, CreditCard, Settings, LogOut, Send, Loader2, CheckCircle, AlertCircle, ChevronRight, Clock } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

type Tab = "overview" | "messages" | "orders" | "refill" | "prescriptions" | "billing" | "settings";
interface Message { id: string; sender: string; sender_name?: string; content: string; created_at: string; }
interface Order { id: string; status: string; pharmacy_id: string; amount_cents: number; created_at: string; tracking_number?: string; estimated_delivery?: string; }

const statusColor = (status: string) => {
  const map: Record<string, string> = { paid: "text-warm-600 bg-warm-50", shipped: "text-blue-600 bg-blue-50", delivered: "text-green-600 bg-green-50", processing: "text-yellow-600 bg-yellow-50", failed: "text-red bg-red/[0.08]", pending: "text-warm-400 bg-warm-50" };
  return map[status] || "text-warm-600 bg-warm-50";
};

const PatientPortal = () => {
  useSEO(SEO_CONFIGS.portal);
  const { patient, subscriptions, loading, logout } = usePatient();
  const [tab, setTab] = useState<Tab>("overview");
  const [messages, setMessages] = useState<Message[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sendingMsg, setSendingMsg] = useState(false);
  const [refillSubmitted, setRefillSubmitted] = useState(false);
  const [refillData, setRefillData] = useState({ weightChange: "", satisfaction: "5", sideEffects: "", notes: "" });

  useEffect(() => { if (!loading && !patient) window.location.href = "/login"; }, [loading, patient]);

  useEffect(() => {
    if (!patient || tab !== "messages") return;
    getMessages(patient.id).then(setMessages).catch(console.error);
    const ch = supabase.channel(`msg:${patient.id}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `patient_id=eq.${patient.id}` }, (p) => setMessages((prev) => [...prev, p.new as Message])).subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [patient, tab]);

  useEffect(() => {
    if (!patient || tab !== "orders") return;
    supabase.from("orders").select("*").eq("patient_id", patient.id).order("created_at", { ascending: false }).then(({ data }) => { if (data) setOrders(data); });
  }, [patient, tab]);

  const handleSendMessage = async () => {
    if (!patient || !newMessage.trim()) return;
    setSendingMsg(true);
    try { await sendMessage(patient.id, newMessage.trim()); setNewMessage(""); } catch (e) { console.error(e); } finally { setSendingMsg(false); }
  };

  const handleRefillSubmit = async () => {
    if (!patient || !subscriptions[0]) return;
    try {
      await submitRefillCheckin({ patient_id: patient.id, weight_lbs: refillData.weightChange ? parseFloat(refillData.weightChange) : undefined, side_effects: refillData.sideEffects, notes: refillData.notes });
      setRefillSubmitted(true);
    } catch (e) { console.error(e); }
  };

  if (loading) return <PageLayout title="Patient Portal"><div className="min-h-[60vh] flex items-center justify-center"><Loader2 size={32} className="animate-spin text-red" /></div></PageLayout>;
  if (!patient) return null;

  const tabs = [
    { id: "overview" as Tab, label: "Overview", icon: <CheckCircle size={16} /> },
    { id: "messages" as Tab, label: "Messages", icon: <MessageCircle size={16} /> },
    { id: "orders" as Tab, label: "Orders", icon: <Package size={16} /> },
    { id: "refill" as Tab, label: "Refill", icon: <RefreshCw size={16} /> },
    { id: "prescriptions" as Tab, label: "Prescriptions", icon: <FileText size={16} /> },
    { id: "billing" as Tab, label: "Billing", icon: <CreditCard size={16} /> },
    { id: "settings" as Tab, label: "Settings", icon: <Settings size={16} /> },
  ];

  return (
    <PageLayout title="Patient Portal">
      <div className="bg-warm-800 px-5 md:px-12 py-8">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-1">Patient Portal</div>
            <h1 className="font-display font-black text-white text-xl">Welcome back, {patient.firstName || patient.email.split("@")[0]}</h1>
            <div className="flex items-center gap-2 mt-1">
              <div className={`w-2 h-2 rounded-full ${patient.status === "active" ? "bg-green-400" : "bg-yellow-400"}`} />
              <span className="text-[0.75rem] text-white/60 capitalize">{patient.status}</span>
              {subscriptions.length > 0 && <span className="text-[0.75rem] text-white/40">· {subscriptions.length} active plan{subscriptions.length > 1 ? "s" : ""}</span>}
            </div>
          </div>
          <button onClick={logout} className="flex items-center gap-2 text-[0.78rem] text-white/50 hover:text-white transition-colors"><LogOut size={15} /> Log Out</button>
        </div>
      </div>

      <div className="bg-background px-5 md:px-12 py-8">
        <div className="max-w-[1280px] mx-auto flex gap-7 items-start">
          <aside className="hidden md:block w-[190px] flex-shrink-0 sticky top-20">
            <nav className="space-y-0.5">
              {tabs.map((t) => (
                <button key={t.id} onClick={() => setTab(t.id)} className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[0.82rem] font-medium transition-colors text-left ${tab === t.id ? "bg-red text-primary-foreground" : "text-warm-600 hover:bg-warm-50 hover:text-warm-800"}`}>
                  {t.icon}{t.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="md:hidden overflow-x-auto flex gap-2 pb-3 mb-2 w-full">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[0.78rem] font-medium transition-colors ${tab === t.id ? "bg-red text-primary-foreground" : "border border-warm-200 text-warm-600"}`}>
                {t.icon}{t.label}
              </button>
            ))}
          </div>

          <main className="flex-1 min-w-0">
            {tab === "overview" && (
              <div className="space-y-5">
                <h2 className="font-display font-bold text-warm-800 text-xl">Your Care Summary</h2>
                <div>
                  <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-warm-400 mb-3">Active Plans</div>
                  {subscriptions.length === 0 ? (
                    <div className="bg-warm-50 border border-warm-100 rounded-2xl p-6 text-center">
                      <p className="text-[0.85rem] text-warm-600 mb-4">No active plans yet. Your provider is reviewing your assessment.</p>
                      <a href="/health-check" className="inline-block bg-red text-primary-foreground font-bold px-6 py-2.5 rounded-lg text-[0.85rem]">Complete Your Assessment →</a>
                    </div>
                  ) : subscriptions.map((sub) => (
                    <div key={sub.id} className="bg-card border border-warm-100 rounded-2xl p-5 flex items-center justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <div className="font-semibold text-warm-800">{sub.productName}</div>
                        <div className="text-[0.78rem] text-warm-400 mt-0.5">${(sub.amountCents / 100).toFixed(0)}/mo{sub.couplesDiscount && <span className="ml-2 text-red font-semibold">· 15% Couples Discount</span>}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[0.68rem] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full capitalize">{sub.status}</span>
                        <button onClick={() => setTab("billing")} className="text-[0.78rem] text-warm-400 hover:text-warm-800 flex items-center gap-1">Manage <ChevronRight size={12} /></button>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-warm-400 mb-3">Quick Actions</div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { label: "Message My Provider", sub: "24/7 access", tab: "messages" as Tab, icon: <MessageCircle size={18} /> },
                      { label: "Track My Order", sub: "Shipping & delivery", tab: "orders" as Tab, icon: <Package size={18} /> },
                      { label: "Monthly Check-In", sub: "Required for refill", tab: "refill" as Tab, icon: <RefreshCw size={18} /> },
                      { label: "View Prescriptions", sub: "Medications & dosage", tab: "prescriptions" as Tab, icon: <FileText size={18} /> },
                    ].map((action) => (
                      <button key={action.label} onClick={() => setTab(action.tab)} className="flex items-center gap-3 bg-card border border-warm-100 rounded-xl p-4 hover:border-red hover:shadow-soft transition-all text-left group">
                        <div className="w-9 h-9 rounded-full bg-red/[0.08] flex items-center justify-center text-red group-hover:bg-red group-hover:text-white transition-colors flex-shrink-0">{action.icon}</div>
                        <div><div className="text-[0.85rem] font-semibold text-warm-800">{action.label}</div><div className="text-[0.72rem] text-warm-400">{action.sub}</div></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === "messages" && (
              <div className="flex flex-col h-[580px]">
                <h2 className="font-display font-bold text-warm-800 text-xl mb-4">Messages</h2>
                <div className="flex-1 overflow-y-auto bg-warm-50 border border-warm-100 rounded-2xl p-4 space-y-3 mb-4">
                  {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-center"><div className="text-warm-400"><MessageCircle size={32} className="mx-auto mb-2 opacity-30" /><p className="text-[0.82rem]">No messages yet. Your provider will reach out after reviewing your assessment.</p></div></div>
                  ) : messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "patient" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-[0.85rem] leading-[1.6] ${msg.sender === "patient" ? "bg-red text-primary-foreground rounded-br-sm" : "bg-card border border-warm-100 text-warm-800 rounded-bl-sm"}`}>
                        {msg.sender !== "patient" && <div className="text-[0.68rem] font-bold text-warm-400 mb-1">{msg.sender_name || "Your Provider"}</div>}
                        {msg.content}
                        <div className={`text-[0.62rem] mt-1.5 ${msg.sender === "patient" ? "text-primary-foreground/60" : "text-warm-400"}`}>{new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} placeholder="Message your provider..." className="flex-1 border border-warm-200 rounded-xl px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" />
                  <button onClick={handleSendMessage} disabled={sendingMsg || !newMessage.trim()} className="bg-red hover:bg-red-dark disabled:opacity-50 text-primary-foreground px-4 py-2.5 rounded-xl transition-colors">
                    {sendingMsg ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
              </div>
            )}

            {tab === "orders" && (
              <div>
                <h2 className="font-display font-bold text-warm-800 text-xl mb-4">Order History</h2>
                {orders.length === 0 ? (
                  <div className="bg-warm-50 border border-warm-100 rounded-2xl p-8 text-center"><Package size={32} className="text-warm-300 mx-auto mb-3" /><p className="text-[0.85rem] text-warm-600">No orders yet. Orders appear here once your prescription is approved.</p></div>
                ) : orders.map((order) => (
                  <div key={order.id} className="bg-card border border-warm-100 rounded-2xl p-5 mb-3">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <div className="text-[0.8rem] font-semibold text-warm-800">Order #{order.id.slice(-8).toUpperCase()}</div>
                      <span className={`text-[0.68rem] font-bold px-2.5 py-1 rounded-full capitalize ${statusColor(order.status)}`}>{order.status}</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-3 text-[0.78rem]">
                      <div><div className="text-warm-400 mb-0.5">Pharmacy</div><div className="text-warm-800 font-medium capitalize">{order.pharmacy_id}</div></div>
                      <div><div className="text-warm-400 mb-0.5">Amount</div><div className="text-warm-800 font-medium">${(order.amount_cents / 100).toFixed(2)}</div></div>
                      <div><div className="text-warm-400 mb-0.5">Date</div><div className="text-warm-800 font-medium">{new Date(order.created_at).toLocaleDateString()}</div></div>
                    </div>
                    {order.tracking_number && (
                      <div className="mt-3 pt-3 border-t border-warm-100 flex items-center gap-2 text-[0.78rem]">
                        <Clock size={13} className="text-warm-400" />
                        <span className="text-warm-400">Tracking:</span>
                        <span className="text-red font-semibold">{order.tracking_number}</span>
                        {order.estimated_delivery && <span className="text-warm-400">· Est. {new Date(order.estimated_delivery).toLocaleDateString()}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {tab === "refill" && (
              <div>
                <h2 className="font-display font-bold text-warm-800 text-xl mb-2">Monthly Check-In</h2>
                <p className="text-[0.85rem] text-warm-600 mb-6">Complete this form to approve your next shipment and update your provider on your progress.</p>
                {refillSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <CheckCircle size={40} className="text-green-600 mx-auto mb-3" />
                    <h3 className="font-display font-bold text-green-800 text-xl mb-2">Check-In Submitted!</h3>
                    <p className="text-[0.85rem] text-green-700">Your provider will review your progress. Your next shipment will be processed within 24 hours.</p>
                  </div>
                ) : (
                  <div className="bg-card border border-warm-100 rounded-2xl p-6 space-y-5">
                    <div><label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Weight Change This Month (lbs) <span className="font-normal text-warm-400">Optional</span></label><input type="number" value={refillData.weightChange} onChange={(e) => setRefillData({ ...refillData, weightChange: e.target.value })} placeholder="e.g. -8 for lost 8 lbs" className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" /></div>
                    <div><label className="block text-[0.78rem] font-semibold text-warm-700 mb-2">Overall Satisfaction (1–5)</label>
                      <div className="flex gap-2">{["1","2","3","4","5"].map((n) => (<button key={n} onClick={() => setRefillData({ ...refillData, satisfaction: n })} className={`w-10 h-10 rounded-lg font-bold text-sm transition-colors ${refillData.satisfaction === n ? "bg-red text-primary-foreground" : "border border-warm-200 text-warm-600 hover:border-red"}`}>{n}</button>))}</div>
                    </div>
                    <div><label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Side Effects <span className="font-normal text-warm-400">Optional</span></label><input type="text" value={refillData.sideEffects} onChange={(e) => setRefillData({ ...refillData, sideEffects: e.target.value })} placeholder="e.g. mild nausea first week" className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" /></div>
                    <div><label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Notes For Your Provider <span className="font-normal text-warm-400">Optional</span></label><textarea rows={3} value={refillData.notes} onChange={(e) => setRefillData({ ...refillData, notes: e.target.value })} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors resize-none" /></div>
                    <button onClick={handleRefillSubmit} className="w-full bg-red hover:bg-red-dark text-primary-foreground font-bold py-3 rounded-lg text-[0.88rem] transition-colors">Submit Check-In & Approve Next Shipment →</button>
                  </div>
                )}
              </div>
            )}

            {tab === "prescriptions" && (
              <div><h2 className="font-display font-bold text-warm-800 text-xl mb-4">Your Prescriptions</h2>
                <div className="bg-warm-50 border border-warm-100 rounded-2xl p-6 text-center"><FileText size={32} className="text-warm-300 mx-auto mb-3" /><p className="text-[0.85rem] text-warm-600">Your prescription details appear here after your provider approves treatment.</p><button onClick={() => setTab("messages")} className="mt-4 text-[0.82rem] font-semibold text-red hover:underline">Message Your Provider →</button></div>
              </div>
            )}

            {tab === "billing" && (
              <div><h2 className="font-display font-bold text-warm-800 text-xl mb-4">Billing & Subscription</h2>
                <div className="bg-card border border-warm-100 rounded-2xl p-6 space-y-4">
                  {subscriptions.length === 0 ? <p className="text-[0.85rem] text-warm-600">No active subscriptions.</p> :
                    subscriptions.map((sub) => (
                      <div key={sub.id} className="flex items-center justify-between border-b border-warm-100 pb-4 last:border-0 last:pb-0">
                        <div><div className="font-semibold text-warm-800">{sub.productName}</div><div className="text-[0.75rem] text-warm-400">${(sub.amountCents / 100).toFixed(0)}/mo{sub.currentPeriodEnd && ` · Renews ${new Date(sub.currentPeriodEnd).toLocaleDateString()}`}</div></div>
                        <span className="text-[0.68rem] font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full capitalize">{sub.status}</span>
                      </div>
                    ))
                  }
                  <div className="pt-2"><button onClick={async () => {
                      const { data: { session } } = await supabase.auth.getSession();
                      if (!session) return;
                      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-portal`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Authorization: `Bearer ${session.access_token}` },
                        body: JSON.stringify({ returnUrl: window.location.href }),
                      });
                      const { url } = await res.json();
                      if (url) window.location.href = url;
                    }} className="bg-warm-800 hover:bg-black text-white font-semibold px-5 py-2.5 rounded-lg text-[0.82rem] transition-colors">Manage Billing →</button><p className="text-[0.7rem] text-warm-400 mt-2">To cancel, email <a href="mailto:support@realcare.com" className="text-red underline">support@realcare.com</a> at least 72 hours before billing.</p></div>
                </div>
              </div>
            )}

            {tab === "settings" && (
              <div><h2 className="font-display font-bold text-warm-800 text-xl mb-4">Account Settings</h2>
                <div className="bg-card border border-warm-100 rounded-2xl p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">First Name</label><input type="text" defaultValue={patient.firstName} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" /></div>
                    <div><label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Email</label><input type="email" defaultValue={patient.email} disabled className="w-full border border-warm-100 bg-warm-50 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-400" /></div>
                  </div>
                  <button className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-6 py-2.5 rounded-lg text-[0.85rem] transition-colors">Save Changes</button>
                </div>
                <div className="mt-4 bg-warm-50 border border-warm-100 rounded-2xl p-5">
                  <h3 className="font-semibold text-warm-800 mb-3 flex items-center gap-2"><AlertCircle size={16} className="text-red" /> Danger Zone</h3>
                  <button onClick={logout} className="text-[0.82rem] font-semibold text-warm-600 hover:text-red transition-colors flex items-center gap-1.5"><LogOut size={14} /> Log Out</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </PageLayout>
  );
};

export default PatientPortal;
