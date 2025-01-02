import React from 'react';

export default function CodeSupa() {
  const code = `
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export default function MostrarTablaSupabase() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );
      const { data } = await supabase.from('countries').select();
      setCountries(data || []);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </div>
  );
}
`;

  return (
    <div>
      <pre style={{ backgroundColor: 'black', color:'white', padding: '1em', borderRadius: '5px', fontFamily:'Arial' }}>
        {code}
      </pre>
    </div>
  );
}
