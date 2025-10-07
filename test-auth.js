// Test script pour vérifier l'authentification
console.log('🔍 Vérification de l\'authentification Supabase...')

// Vérifier les variables d'environnement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('📋 Configuration:')
console.log('- Supabase URL:', supabaseUrl ? '✅ Configuré' : '❌ Manquant')
console.log('- Supabase Key:', supabaseKey ? '✅ Configuré' : '❌ Manquant')

if (!supabaseUrl || !supabaseKey) {
  console.log('\n⚠️  Pour configurer Supabase:')
  console.log('1. Créez un fichier .env.local à la racine du projet')
  console.log('2. Ajoutez:')
  console.log('   NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co')
  console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon')
  console.log('3. Redémarrez l\'application avec: npm run dev')
} else {
  console.log('\n✅ Supabase est configuré!')
  console.log('🚀 Vous pouvez maintenant utiliser l\'authentification.')
}
