export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      cases: {
        Row: {
          consent_signed: boolean
          consent_signed_at: string | null
          created_at: string
          denial_reason: string | null
          id: string
          intake_submitted_at: string | null
          openloop_case_id: string | null
          patient_id: string
          provider_id: string | null
          provider_name: string | null
          provider_notes: string | null
          status: string
          treatment_category: string
          updated_at: string
        }
        Insert: {
          consent_signed?: boolean
          consent_signed_at?: string | null
          created_at?: string
          denial_reason?: string | null
          id?: string
          intake_submitted_at?: string | null
          openloop_case_id?: string | null
          patient_id: string
          provider_id?: string | null
          provider_name?: string | null
          provider_notes?: string | null
          status?: string
          treatment_category: string
          updated_at?: string
        }
        Update: {
          consent_signed?: boolean
          consent_signed_at?: string | null
          created_at?: string
          denial_reason?: string | null
          id?: string
          intake_submitted_at?: string | null
          openloop_case_id?: string | null
          patient_id?: string
          provider_id?: string | null
          provider_name?: string | null
          provider_notes?: string | null
          status?: string
          treatment_category?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cases_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          handled: boolean
          id: string
          message: string
          name: string
          subject: string | null
        }
        Insert: {
          created_at?: string
          email: string
          handled?: boolean
          id?: string
          message: string
          name: string
          subject?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          handled?: boolean
          id?: string
          message?: string
          name?: string
          subject?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string
          id: string
          patient_id: string
          read_by_patient: boolean
          read_by_staff: boolean
          sender: string
          sender_name: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          patient_id: string
          read_by_patient?: boolean
          read_by_staff?: boolean
          sender: string
          sender_name?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          patient_id?: string
          read_by_patient?: boolean
          read_by_staff?: boolean
          sender?: string
          sender_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          amount_cents: number
          created_at: string
          currency: string
          delivered_at: string | null
          discount_amount_cents: number
          discount_code: string | null
          estimated_delivery: string | null
          hsa_fsa: boolean
          id: string
          patient_id: string
          pharmacy_id: string
          pharmacy_order_id: string | null
          prescription_id: string
          requires_cold_chain: boolean
          ship_to_city: string | null
          ship_to_line1: string | null
          ship_to_line2: string | null
          ship_to_name: string | null
          ship_to_state: string | null
          ship_to_zip: string | null
          status: string
          stripe_payment_intent_id: string | null
          tracking_number: string | null
          updated_at: string
        }
        Insert: {
          amount_cents: number
          created_at?: string
          currency?: string
          delivered_at?: string | null
          discount_amount_cents?: number
          discount_code?: string | null
          estimated_delivery?: string | null
          hsa_fsa?: boolean
          id?: string
          patient_id: string
          pharmacy_id: string
          pharmacy_order_id?: string | null
          prescription_id: string
          requires_cold_chain?: boolean
          ship_to_city?: string | null
          ship_to_line1?: string | null
          ship_to_line2?: string | null
          ship_to_name?: string | null
          ship_to_state?: string | null
          ship_to_zip?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          tracking_number?: string | null
          updated_at?: string
        }
        Update: {
          amount_cents?: number
          created_at?: string
          currency?: string
          delivered_at?: string | null
          discount_amount_cents?: number
          discount_code?: string | null
          estimated_delivery?: string | null
          hsa_fsa?: boolean
          id?: string
          patient_id?: string
          pharmacy_id?: string
          pharmacy_order_id?: string | null
          prescription_id?: string
          requires_cold_chain?: boolean
          ship_to_city?: string | null
          ship_to_line1?: string | null
          ship_to_line2?: string | null
          ship_to_name?: string | null
          ship_to_state?: string | null
          ship_to_zip?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          tracking_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_prescription_id_fkey"
            columns: ["prescription_id"]
            isOneToOne: false
            referencedRelation: "prescriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          address_city: string | null
          address_line1: string | null
          address_line2: string | null
          address_state: string | null
          address_zip: string | null
          couples_discount_active: boolean
          created_at: string
          date_of_birth: string | null
          email: string
          first_name: string | null
          gender: string | null
          hsa_fsa_on_file: boolean
          id: string
          klaviyo_profile_id: string | null
          last_name: string | null
          openloop_patient_id: string | null
          partner_patient_id: string | null
          phone: string | null
          state: string | null
          status: string
          stripe_customer_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address_city?: string | null
          address_line1?: string | null
          address_line2?: string | null
          address_state?: string | null
          address_zip?: string | null
          couples_discount_active?: boolean
          created_at?: string
          date_of_birth?: string | null
          email: string
          first_name?: string | null
          gender?: string | null
          hsa_fsa_on_file?: boolean
          id?: string
          klaviyo_profile_id?: string | null
          last_name?: string | null
          openloop_patient_id?: string | null
          partner_patient_id?: string | null
          phone?: string | null
          state?: string | null
          status?: string
          stripe_customer_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address_city?: string | null
          address_line1?: string | null
          address_line2?: string | null
          address_state?: string | null
          address_zip?: string | null
          couples_discount_active?: boolean
          created_at?: string
          date_of_birth?: string | null
          email?: string
          first_name?: string | null
          gender?: string | null
          hsa_fsa_on_file?: boolean
          id?: string
          klaviyo_profile_id?: string | null
          last_name?: string | null
          openloop_patient_id?: string | null
          partner_patient_id?: string | null
          phone?: string | null
          state?: string | null
          status?: string
          stripe_customer_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "patients_partner_patient_id_fkey"
            columns: ["partner_patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      prescriptions: {
        Row: {
          case_id: string
          created_at: string
          dosage: string
          id: string
          medication: string
          openloop_prescription_id: string | null
          patient_id: string
          pharmacy_id: string
          quantity: number
          refills_remaining: number
          status: string
          updated_at: string
        }
        Insert: {
          case_id: string
          created_at?: string
          dosage: string
          id?: string
          medication: string
          openloop_prescription_id?: string | null
          patient_id: string
          pharmacy_id: string
          quantity: number
          refills_remaining?: number
          status?: string
          updated_at?: string
        }
        Update: {
          case_id?: string
          created_at?: string
          dosage?: string
          id?: string
          medication?: string
          openloop_prescription_id?: string | null
          patient_id?: string
          pharmacy_id?: string
          quantity?: number
          refills_remaining?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "cases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      refill_checkins: {
        Row: {
          approved_for_refill: boolean
          created_at: string
          id: string
          notes: string | null
          patient_id: string
          prescription_id: string | null
          side_effects: string | null
          weight_lbs: number | null
        }
        Insert: {
          approved_for_refill?: boolean
          created_at?: string
          id?: string
          notes?: string | null
          patient_id: string
          prescription_id?: string | null
          side_effects?: string | null
          weight_lbs?: number | null
        }
        Update: {
          approved_for_refill?: boolean
          created_at?: string
          id?: string
          notes?: string | null
          patient_id?: string
          prescription_id?: string | null
          side_effects?: string | null
          weight_lbs?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "refill_checkins_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refill_checkins_prescription_id_fkey"
            columns: ["prescription_id"]
            isOneToOne: false
            referencedRelation: "prescriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          amount_cents: number
          cancel_at_period_end: boolean
          cancellation_reason: string | null
          cancelled_at: string | null
          couples_discount: boolean
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          discount_percent: number
          environment: string
          id: string
          patient_id: string
          product_id: string | null
          product_name: string
          status: string
          stripe_customer_id: string | null
          stripe_price_id: string
          stripe_subscription_id: string
          treatment_category: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount_cents: number
          cancel_at_period_end?: boolean
          cancellation_reason?: string | null
          cancelled_at?: string | null
          couples_discount?: boolean
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          discount_percent?: number
          environment?: string
          id?: string
          patient_id: string
          product_id?: string | null
          product_name: string
          status?: string
          stripe_customer_id?: string | null
          stripe_price_id: string
          stripe_subscription_id: string
          treatment_category: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount_cents?: number
          cancel_at_period_end?: boolean
          cancellation_reason?: string | null
          cancelled_at?: string | null
          couples_discount?: boolean
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          discount_percent?: number
          environment?: string
          id?: string
          patient_id?: string
          product_id?: string | null
          product_name?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string
          stripe_subscription_id?: string
          treatment_category?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "staff" | "patient"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "staff", "patient"],
    },
  },
} as const
