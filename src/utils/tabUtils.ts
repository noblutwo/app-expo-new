import { Router } from 'expo-router'; // Giả sử bạn đang sử dụng Next.js

const tabPaths = {
    index: ['', 'index', 'healthInsuranceCard', 'participationProcess', 'informationBenefit', 'examinationBook', 'accountChild'],
    search: ['search', 'lookup'],
    help: ['help', 'tabHelp'],
    service: ['service', 'tabService'],
};

export const isTabActive = (tabName: string, pathname: string) => {
    const drawerPath = '/drawer/';
    const normalizedPath = pathname.startsWith(drawerPath) ? pathname.slice(drawerPath.length) : pathname;
    
    return tabName in tabPaths
        ? tabPaths[tabName as keyof typeof tabPaths].some(path => normalizedPath.startsWith(path))
        : normalizedPath.startsWith(tabName);
};

export const createHandleTabPress = (router: Router, isAuthenticated: boolean) => {
    return (tabName: string) => {
        if (!isAuthenticated && (tabName === 'index' || tabName === 'service')) {
            router.push('/');
        } else {
            // Uncomment the next line if you want to navigate to the tab
            // router.push(`/drawer/${tabName}`);
        }
    };
};