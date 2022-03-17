const discord = require('discord.js-selfbot');
const bot = new discord.Client();
const child = require("child_process");
var owner = "789388058297892895";
var enabled = [];
var botid = "953585027743117353";
var jabbwords =["i dont give a shit", "shut the fuck up","i am is GROUND the 5432122345 INCHES","seamus the","OS","sparkOS","you of ground 66612345 SECOND","oh oh oh oh oh","kikoescu5858","bonziworld of the shit","david egan is hooligan","samsung seamus hooligan shitass","sparkfire298.site of shut down","seamus larp","protegent",'FAKE',"bonzi spambot script","script kiddie","funy","of bonzi","bonzi","you of GROUNDED","THE GROUND 100000000 INCHES","of","ALL HAIL TRUMPET",'CUNTASS',"bonziBUDDY","this site is shut down",'shut','david egan','LOIC','Grounded','is','s', 'bad user', 'bonziWORLD',"of","funy",'david egan HATER grounded', "you are of DDOS","ddos","windows xp",'henry stickmin','you guys IS HOOLIGAN',"of sex","DONT OF CALL ME ARE JABBA","spark hater grounds 1000000 millisecond","ddos the world a BONZI","among us of are","cringe are","buttsex","dickheads","coronavirus","grrrrrrrrr","CPU","the is of code javascript","gay","Pro","dell","bitch","diogokiko","DEMON","python","burger","RAM","bonzi DDOS the LOIC","sgtdanielworld","REAL", "type +help"];

var admins = [owner,"765687453625221160"];
var comd = "";
var spamming = false;
var mocks = {
gino:["go back to kfc africa", "me not gino", "put jew in gas chamber", "your autistic go get your blanket"],
yacine:["i totally dont simp for plainrock124", "STOP IT I CAN DO WHAT I WANT", "Shut up", "Yacinerock124"],
tudor:["im a russian criminal", "im so sad nobody likes me", "STOP OR I GET KNIFE", "i love ambulances", "no no ambulance is gem"],
alonso:["I alonso", "sexy weakling", "You have sex", "i want to marry you"],
miguel:["**Mock for miguel is coming soon**"],
saytaiyrsh:["beach", "NO U DAVID", "blyat", "GET OUT DAVID", "ae kmao", "i love being the instigator for so many dramas that nobody needs", "taki beacha", "cyka blyat shut up", ":pig:", "STFU HENTER", "i harass people with conditions for no reason", "i exposed connor for doing something he didnt do"]

}
var facts = ["this is gino's face https://cdn.upload.systems/uploads/mv56F5pO.png", "arda is dead", "saytaiyrsh isnt allowed in ROTFE", "this bot is free to use at github.com/s-298/saxobot", "taki beacha", "klasky has leaked many selfbot tokens", "gino is gay with 18 people", "yacine is back soon", "this is a selfbot (cry about it)", "you can apply for admin on this bot ||just kidding, spark picks the admins himself||", "gino loves anka zone", "north korea is open prison", "gino was born in north korea and relocated illegally"];
var retards = ["779810654856544278", "944439860184354847",  "944333487383642152", "919029931730677761", "908960857000640613", "908708026238791732", "697165151115280484", "438025457875681290", "925802161047232543", "783547534836629526", "883555273061593089", "818523508341473290", "951406021664964608", "915952343261016084", "659776097537228800", "839739319946313738"];
bot.on('ready', ()=>{

console.log("its online");
bot.user.setActivity("the saxophone");
});
bot.on("message", message=>{

if(message.author.id !== botid && retards.includes(message.author.id)){
if(enabled.includes(message.guild.id)){

if(message.content.length >= 1970){
message.channel.send("<@"+message.author.id+">, you just said: " + message.content.substring(0,1900).replace(/discord.com/g, "sparkfire298.xyz").replace(/discord.gg/g, "sparkfire298.xyz").replace(/@everyone/g, "everyone"));
} else{
var channel =bot.channels.cache.get(message.channel.id);
message.channel.send("<@"+message.author.id+">, you just said: " + message.content.replace(/discord.com/g, "sparkfire298.xyz").replace(/discord.gg/g, "sparkfire298.xyz").replace(/<@789388058297892895>/g, "sparkfire298"));
}
}
}else if(message.author.id !== botid && retards.includes(message.author.id) == false){
if(message.content.substring(0,1) == "+", "!", "?", "sax "){
if(message.content.includes(" ")){
comd = message.content.substring(1, message.content.indexOf(" "));

param = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
} else{
comd = message.content.substring(1, message.content.length);
param = "";
}
if(comd == "ping"){
var msg = "";
if(param==""){
param = 1;
}
param = parseInt(param);
if(param<=150 && param!==NaN){
for(i=0;i<param;i++){
msg = "";
retards.forEach(retard=>{
msg+="<@"+retard+">";
});
message.channel.send(msg);
}
} else{
message.channel.send("the limits 15 and you gotta use a number");
}
} else if(comd == "help"){
if(param == ""){
message.channel.send("```\nsaxobot (previously trumpet) help\nthe tool to annoy the retards.\ncommands: +ping, +help, +mock, +blacklist, +say, +fact, +updatelog, +spam, +funnyrate, +drip, +saxobot\nprefixes: !, ?, +\n\nUSAGE:\n+ping [number of pings]\n+help OR +help admin\n+mock [user]\n+blacklist\n+say [text]\n+fact\n+updatelog OR +updatelog [version number] OR +updatelog versions\n+spam [message]/[count]\n+funnyrate [number]\n\nNOTES: the square brackets show where the parameter goes, dont actually include them when you say a command\nif you put (i) in the message you wanna spam, the bot says the message number```\ncredits to fune 420 for the base code -- `https://github.com/funyegg/geribot`");
} else if(param == "admin"){
message.channel.send("```\nADMIN COMMANDS\ncommands: +blacklist, +unblacklist, +copytoggle, +restartn\nUSAGE:\n+blacklist [userid]\n+unblacklist [userid]\n+copytoggle\n+restart```");
}
}

else if(comd == "saxobot") {
  message.channel.send("```\nSAXOBOT 2.0 \nMade by sparkfire298\n\nLooking for a reliable bot? Try sparkfirebot: discord.ly/sparkfirebot\n\nWebsite: sparkfire298.xyz\nCreated on 2/28/2022\nCredits: github.com/funyegg/geribot for the base code```")
}
else if(comd == "mock"){
if(Object.keys(mocks).includes(param)){
var mock = mocks[param][Math.floor(Math.random()*mocks[param].length)];
message.channel.send(mock);
if(param == "saytaiyrsh"){
    message.react("🤡")
    message.react("🐷")
}
}else{
message.channel.send("bad parameter. available retards: "+Object.keys(mocks).toString()+"\n example: +mock gino");
}
} else if(comd == "blacklist"){
if(param == ""){
retardss = "\n";
retards.forEach(retard=>{
retardss+="<@"+retard+">\n";
});
message.channel.send("Here is the retard list:" + retardss + "**NOTE: They might be numbers or \"@invalid-user\". This is because they haven't loaded yet.**")
} else{

if(admins.includes(message.author.id)==false){
message.channel.send("youre not an admin");
} else{
if(param !== owner){
if(retards.includes(param) == false){
retards.push(param);
message.channel.send("the id "+param+" was blacklisted");
} else{
message.channel.send("the id "+param+" is already blacklisted");
}
} else{
message.channel.send("you cant blacklist the owner");
}
}
}
} else if(comd == "unblacklist"){
if(admins.includes(message.author.id)==false){
message.channel.send("youre not an admin");
} else{
if(retards.includes(param)){
retards.splice(retards.indexOf(param), 1);

message.channel.send("the id "+ param +" got unblacklisted (<@"+ param +")>");
} else{
message.channel.send("the id "+ param +" isnt blacklisted(<@"+ param +")>");
}
}
} else if(comd == "say"){
if (param == ""){
message.channel.send("your message cant be blank");
} else{
  if(param == "nigger"){
    message.channel.send(":skull: your account is now waiting a blacklist from this");
  }
message.channel.send(param);
}
} else if(comd == "copytoggle"){
if(admins.includes(message.author.id)){
if(enabled.includes(message.guild.id)){
enabled.splice(enabled.indexOf(message.guild.id), 1);
message.channel.send("copying is disabled here now");
} else if(enabled.includes(message.guild.id) == false){
enabled.push(message.guild.id);

message.channel.send("copying is enabled here now");
}

} else{
message.channel.send("youre not an admin");
}
} else if(comd == "drip"){
rand = Math.random()/10;
if(rand > 0.05){

message.channel.send("https://cdn.upload.systems/uploads/F48HoHuz.png?width=1179&height=663");
} else{

message.channel.send("https://cdn.upload.systems/uploads/F48HoHuz.png?width=1179&height=663");
}
} else if(comd == "admin"){
if(message.author.id == owner){
if(param!=="" && param!=="list" && param.substring(0,6) !== "remove"){
admins.push(param);
message.channel.send("added admin "+ param);
}else if(param == "list"){
message.channel.send("list:\n"+admins.map(adm=>"<@"+adm+">").toString().replace(/,/g,"\n"));
} else if(param.substring(0,6) == "remove"){
if(param.includes(" ")){
param = param.substring(param.indexOf(" ") + 1, param.length);
if(admins.includes(param)){
admins.splice(admins.indexOf(param), 1);
message.channel.send("removed admin " + param);
} else{
message.channel.send("this isnt an admin");
}
} else{
message.channel.send("Please specify");
}
} else{
message.channel.send("it cant be empty dumbass");
}
} else{

message.channel.send("youre not spark");
}
} else if(comd == "fact"){
message.channel.send("Fun Fact: "+facts[Math.floor(Math.random()*facts.length)]);
} else if(comd == "updatelog"){
    if(param == "versions"){
    message.channel.send("```\nDOCUMENTED VERSIONS\nthe versions i (or fune) bothered keeping track of\n\n1.5\n1.6\n1.7\n1.8\1.9\n\nthats it.```");
    } else if(param == "1.5"){
        message.channel.send("```\n1.5: \n\nStarted on an actual bot application```")
    } else if(param == "1.6"){
        message.channel.send("```\n1.6\n\nadded spam command```")
    } else if(param == "1.7"){
        message.channel.send("```\n1.7\n\nincreased spam command limit to 30```")
   } else if(param == "1.8"){
        message.channel.send("```\n1.8 (the best update)\n\n- increased spam command limit to 1000\n-added saytaiyrsh mock\n-switched users```")
         } else if(param == "1.9"){
        message.channel.send("```\n1.9\n\nfinally added some facts (+fact)```")
        } else if(param == "2.0"){
        message.channel.send("```\n2.0 \n\nadded 2 prefixes: \"!\" and \"?\"```")
    } else if(param!==""){
        message.channel.send("this version isnt documented or it isnt a version.");
    } else{
        message.channel.send("```\nlatest:\n2.0 \n\nadded 2 prefixes: \"!\" and \"?\"```");
    }
} else if(comd == "spam"){
    
    if(param.includes("/")){
msgtospam2 = param.substring(0, param.indexOf("/"));
count2 = parseInt(param.substring(param.indexOf("/")+1, param.length));

        if(spamming == false){
if(count2>0 && count2<=1000){
    i=0;
    spammsg();

    function spammsg(){
        setTimeout(()=>{
            if(i<count2){
                spamming = true;
                i+=1;
message.channel.send(msgtospam2.replace("(i)", i));
spammsg();
            } else{
                spamming = false;
            }
        },1000)
    }
}else{
    message.channel.send(":x: Please provide a number thats higher then 0 and lower then 100");
}
        }
    } else{
        message.channel.send("invalid usage, example: +spam re/10")
    }

} else if(comd == "restart"){
if(admins.includes(message.author.id)){
    //child.execFile("./start.sh");
    //uncomment the above if youre NOT using pm2. change start.sh to whatever command file will start the program.
    process.exit();
} else{
message.channel.send("youre not an admin");
}
} else if(comd == "funnyrate"){
param = parseInt(param);
if(param > 0 && param<=1250){
tosendjab = "";
var lastword = "";
for(i=0;i<param/3;i++){
rand = Math.floor(Math.random() * jabbwords.length);
while(lastword == jabbwords[rand]){
rand = Math.floor(Math.random()* jabbwords.length);
}
tosendjab += jabbwords[rand];
jabodd = Math.floor(Math.random()*9);
if(jabodd == 1){
tosendjab += "!!!! "
} else if(jabodd == 0){
    tosendjab+="? ";
    }else{
    tosendjab += " ";
}
}
message.channel.send(tosendjab);
}else{
    message.channel.send("it needs to be a number above 0 and below or equal to 1250");
}
}
}

}
})

const keepAlive = require('./server');

keepAlive();
bot.login(process.env.token)
