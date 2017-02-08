# sqlbrowserproxy installation

1) install nodejs
2) under c:\: git clont https://github.com/nickinchina/sqlbrowserproxy
3) npm install -g node-windows
4) under c:\sqlbrowserproxy : npm link node-windows
5) install .net 3.5: DISM.exe /Online /Add-Package /PackagePath: //nas/share/microsoft-windows-netfx3-ondemand-package.cab
6) copy exmaple.confg.js to config.js and enter ip mappings
7) under c:\sqlbrowserproxy : node install.js