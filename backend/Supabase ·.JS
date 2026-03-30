// ── Yo Lo Vendo — Configuración Supabase ──────────────────
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL  = 'https://uvkjerejhhbpgyvpmxur.supabase.co'
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2a2plcmVqaGhicGd5dnBteHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4NTA0ODEsImV4cCI6MjA5MDQyNjQ4MX0.bWQEBRsrxeEdtMRAyOfTZsGKI526Ig629APP21saUVI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)

// Devuelve el usuario activo o null
export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Redirige a index.html si no hay sesión
export async function requireAuth() {
  const user = await getUser()
  if (!user) window.location.href = 'index.html'
  return user
}