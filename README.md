# sqlbrowserproxy installation

1) install nodejs

2) open command prompt(Administrator), under c:\ git clone https://github.com/nickinchina/sqlbrowserproxy

3) npm install -g node-windows

4) under c:\sqlbrowserproxy : npm link node-windows

5) install .net 3.5: DISM.exe /Online /Add-Package /PackagePath: //nas/share/microsoft-windows-netfx3-ondemand-package.cab

6) copy exmaple.confg.js to config.js and enter ip mappings

7) under c:\sqlbrowserproxy : node install.js

8) netsh advfirewall firewall add rule name=“sqlbrowser” dir=in action=allow protocol=UDP localport=1434
