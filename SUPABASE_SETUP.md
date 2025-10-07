# Centre Communautaire de Salaberry - Authentification Supabase

## Configuration requise

Pour utiliser l'authentification Supabase, vous devez créer un fichier `.env.local` à la racine du projet avec vos clés Supabase :

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon-supabase
```

## Comment obtenir vos clés Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Dans le dashboard, allez dans **Settings** > **API**
4. Copiez :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Fonctionnalités d'authentification

- ✅ Connexion/Inscription par email
- ✅ Page de connexion avec Supabase Auth UI
- ✅ Dashboard protégé
- ✅ Déconnexion
- ✅ Redirections automatiques
- ✅ Gestion des états de chargement

## Pages disponibles

- `/` - Page d'accueil avec bouton Login/Dashboard
- `/login` - Page de connexion
- `/dashboard` - Dashboard protégé (redirection si non connecté)

## Démarrage

```bash
npm run dev
```

L'application démarrera sur http://localhost:3000
