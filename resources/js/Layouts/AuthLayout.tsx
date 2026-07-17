import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 relative overflow-hidden">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gray-300 rounded-full blur-3xl opacity-20"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300 rounded-full blur-3xl opacity-20"></div>

            <div
                className="
                    relative
                    w-full
                    max-w-sm
                    rounded-3xl
                    bg-white/90
                    backdrop-blur-xl
                    shadow-2xl
                    p-8
                "
            >
                {children}
            </div>
        </div>
    );
}