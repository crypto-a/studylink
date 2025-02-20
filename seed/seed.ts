// serverless/seed.ts
// (or /api/seed.ts for Vercel, or a Netlify function, etc.)

export const seed = async () => {
    // This is a pseudo-code example of seeding data:
    const exemptUsers = [
      { id: 1, email: 'admin@example.com', role: 'other', isSubscribed: true },
      { id: 2, email: 'exempt@example.com', role: 'student', isSubscribed: true },
    ];
  
    const availableSubscriptions = [
      { id: 'free', name: 'Free Plan', price: 0 },
      { id: 'premium', name: 'Premium Plan', price: 10 },
      { id: 'enterprise', name: 'Enterprise', price: 99 },
    ];
  
    // Pretend we do something with these, e.g. write to a DB:
    console.log('Seeding exemptUsers:', exemptUsers);
    console.log('Seeding subscriptions:', availableSubscriptions);
  
    return {
      success: true,
      message: 'Seed data has been created (this is a placeholder).',
    };
  };
  
  // If it's an actual serverless function, you might do:
  export default async function handler(req, res) {
    const result = await seed();
    return res.json(result);
  }
  