const execute = require('child_process').exec;
const readline = require('readline');
const util = require('util');


var RL = readline.createInterface(process.stdin, process.stdout);

RL.question('Write options number to choose it: 1.ports scaning 2.show apache2 config 3.search for process', (coin)=>{

        if (coin === "1") {
          execute("python scan.py", (err, stdout)=>{
              if (err) {
                  return err;
              }
              console.log(stdout);

                util.log(`done: option${coin}`);
                RL.close();
          });
        }else if (coin === "2") {
          execute("ls /var/www/html/* && cat /etc/apache2/sites-enabled/* && cat /etc/apache2/ports.conf", (err, stdout)=>{
              if (err) {
                  return err;
              }
              console.log(stdout);

                util.log(`done: option${coin}`);
                RL.close();
          });
        }else if (coin === "3") {
          RL.question("What are you looking for?", (search)=>{
            execute(`ps aux | grep ${search}`, (err, stdout)=>{
                if (err) {
                    return err;
                }
                console.log(stdout);

                  util.log(`done: option${coin}`);
                  RL.close();
            });
          });

        }
        else{
             util.log(`no ${coin}`);
             RL.close();
        }
});
