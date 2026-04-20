import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";

interface CheckoutOptions {
  priceId: string;
  treatmentCategory: string;
  customerEmail?: string;
  userId?: string;
  returnUrl?: string;
  productName?: string;
}

export function useStripeCheckout() {
  const [opts, setOpts] = useState<CheckoutOptions | null>(null);

  const openCheckout = useCallback((o: CheckoutOptions) => {
    setOpts({
      ...o,
      returnUrl:
        o.returnUrl ||
        `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
    });
  }, []);

  const closeCheckout = useCallback(() => setOpts(null), []);

  const CheckoutDialog = () => (
    <Dialog open={!!opts} onOpenChange={(open) => !open && closeCheckout()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>{opts?.productName || "Checkout"}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          {opts && <StripeEmbeddedCheckout {...opts} />}
        </div>
      </DialogContent>
    </Dialog>
  );

  return { openCheckout, closeCheckout, CheckoutDialog, isOpen: !!opts };
}
