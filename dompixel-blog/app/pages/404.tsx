import Link from 'next/link';

const Custom404 = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Página não encontrada</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Desculpe, a página que você está procurando não existe.</p>
            <Link href="/">
                <span style={{ fontSize: '1.2rem', color: '#0070f3', textDecoration: 'underline' }}>Voltar para a página inicial</span>
            </Link>
        </div>
    );
};

export default Custom404;
