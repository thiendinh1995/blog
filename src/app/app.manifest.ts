import { DynamicComponentManifest } from 'src/base/interface/dynamic-component-manifest';

export const manifests: DynamicComponentManifest[] = [
    {
        componentId: 'header',
        path: 'header',
        loadChildren: './component/header/header.module#HeaderModule'
    },
];