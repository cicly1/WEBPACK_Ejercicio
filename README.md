# WEBPACK_Ejercicio
Prácticamodulo 3 Webpack

Se ha realizado lo siguiente:
---------------------------------
Implementar una aplicación simple que:
  Páginas y scripts en:
    src/index.ts y src/index.html para mostrar los logos, páginas
  
  -Tenga el bundling montado con webpack.
  
      - Configuracion en package.json y webpack.dev.js y webpack.common.js
   
  -Muestre unlogo (si queréis el de lemoncode).
  
      - Logos en imagenes -> logos_1 y logos_2 de lemoncode
      - abrir src/index.html
  
  -Este montada con typescript.
  
        - Configuracion de typescript:tsconfig.json
    
  -Tenga el texto de hola mundo estilado con SASS
  
      -  src/misestilos.scss
 
 - Una vez descargado y configurado ejecutar:
 
      - npm start que ejecuta el script con el config dev que ejecuta la página index.html para ver logos y estilados con sass
      "start": "cross-env NODE_ENV=development webpack-dev-server --open --config webpack.dev.js",
      
 - Bonus points:
    -Muestra un hola mundo desarrollado con React.
    
        - file react -> src/react_exercise.jsx
        - abrir src/index.html
          <div id="reactEjercicio" class="reactEjercicio"> 
          </div>
          
    -Montar la versión de producción.
      oPista: https://webpack.js.org/guides/production/
      
      
        - Configurado en el config webpack.prod.js
        - script en package.json
          "build": "cross-env NODE_ENV=production rimraf dist && webpack --mode production --config webpack.prod.js",
            
     -Tener variables de entorno para desarrollo o producción:
        oPista: https://webpack.js.org/guides/environment-variables/).
        
        
     -Tener una medida de cuanto mide cada librería: opista: mirar BundleAnalyzerPlugin.
     
     
        - configuracion en webpack.dev.bundle.analyser.js
        - script en package.json 
        "test": "cross-env NODE_ENV=development webpack-dev-server --open --config webpac.dev.bundle.analyser.js"
        
      
    
  
  
 
 
  
  
