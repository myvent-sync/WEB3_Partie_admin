import { AuthProvider } from "react-admin";
import { signIn, signOut, getSession } from "next-auth/react";

export const authProvider: AuthProvider = {
    login: async ({ email, password }) => {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: "/admin/ra",
        });
        if (!result || result.error) {
            throw new Error("Identifiants incorrects");
        }
        const session = await getSession();
        if (session?.user?.role !== "admin") {
            await signOut({ redirect: false });
            throw new Error("Accès non autorisé");  
        }
    },

    logout: async () => {
        await signOut({ redirect: false });
    },

    checkAuth: async () => {
        const session = await getSession();
        if (!session || session?.user?.role !== "admin") {
            throw new Error("Non authentifié");
        }
    },

    checkError: async (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: async () => {
        const session = await getSession();
        return session?.user?.role;
    },
};