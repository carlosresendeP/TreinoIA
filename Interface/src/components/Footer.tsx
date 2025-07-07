

export const Footer: React.FC = () => {

    const DateYear = new Date().getFullYear();

    return (
        <footer className="bg-white shadow-lg shadow-cyan-100/50 w-full p-4">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-gray-600 text-sm">© {DateYear} FitnessAI. Todos os direitos reservados.</p>
                <p className="text-gray-500 text-xs">Desenvolvido por Carlos Paula</p>
            </div>
        </footer>
    );
}