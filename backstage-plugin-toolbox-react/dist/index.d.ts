import { ReactElement } from 'react';

type Tool = {
    id: string;
    name: string;
    component: ReactElement;
    aliases?: string[];
    showOpenInNewWindowButton?: boolean;
    showFavoriteButton?: boolean;
    description?: string;
    category?: string;
    headerButtons?: ReactElement[];
    requiresBackend?: boolean;
};

export type { Tool };
