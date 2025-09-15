export type Database = {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          email: string;
          status: string;
          created_at: string;
        };
        Insert: {
          email: string;
          status: string;
        };
      };
      // Add other tables as needed
    };
  };
};

export type Tables = Database["public"]["Tables"];
export type WaitlistInsert = Database["public"]["Tables"]["waitlist"]["Insert"];
