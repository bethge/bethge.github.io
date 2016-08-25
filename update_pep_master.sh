curl -Lo master.zip https://github.com/jquery/PEP/archive/master.zip
unzip -q master.zip
rm -f master.zip
cd PEP-master
npm install
grunt build
mv dist/pep.js ../pep-master.js
cd ..
rm -fr PEP-master
