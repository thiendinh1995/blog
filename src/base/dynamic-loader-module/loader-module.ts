import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader, ANALYZE_FOR_ENTRY_COMPONENTS, Type, } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ROUTES } from '@angular/router';

import { DynamicComponentManifest } from '../interface/dynamic-component-manifest';
import { DYNAMIC_COMPONENT_MANIFESTS, DYNAMIC_MODULE, DYNAMIC_COMPONENT } from './component-manifest';

@NgModule({
    providers: [{provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }]
})

export class DynamicLoaderModule {
    static forRoot(manifests: DynamicComponentManifest[]): ModuleWithProviders {
        return {
            ngModule: DynamicLoaderModule,
            providers: [
                { provide: ROUTES, useValue: manifests, multi: true },
                { provide: DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests },
            ],
        };
    };

    static forModule(manifest: DynamicComponentManifest): ModuleWithProviders {
        return {
          ngModule: DynamicLoaderModule,
          providers: [
            {
              provide: ANALYZE_FOR_ENTRY_COMPONENTS,
              useValue: manifest,
              multi: true
            },
            // provider for @angular/router to parse
            { provide: ROUTES, useValue: manifest, multi: true },
            // provider for DynamicComponentLoader to analyze
            { provide: DYNAMIC_MODULE, useValue: manifest }
          ]
        };
      }

      static forChild(component: Type<any>): ModuleWithProviders {
        return {
          ngModule: DynamicLoaderModule,
          providers: [
            {
              provide: ANALYZE_FOR_ENTRY_COMPONENTS,
              useValue: component,
              multi: true
            },
            // provider for @angular/router to parse
            { provide: ROUTES, useValue: [], multi: true },
            // provider for DynamicComponentLoader to analyze
            { provide: DYNAMIC_COMPONENT, useValue: component }
          ]
        };
      }
}