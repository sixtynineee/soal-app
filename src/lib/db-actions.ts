// src/lib/db-actions.ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

// Ambil semua skor dari tabel 'skor'
export const getSemuaSkor = async () => {
  const { data, error } = await supabase.from("skor").select("*");

  if (error) {
    console.error("Gagal mengambil data skor:", error.message);
    return [];
  }

  return data;
};
