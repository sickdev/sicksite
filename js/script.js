var cookies = 0;
function parse(text) {
    command = text.split(' ')[0];

    if(command.charAt(0) == "/"){
        if (command == "/download"){
            write("You can download SICK from <a href='http://sourceforge.net/projects/sick-client/files/latest/download'>Sourceforge</a> or from <a href='https://github.com/weloxux/sick'>Github</a>")
        } else if (command == "/about"){
            write("Sick IRC Client, Kid! or SICK for short, is a Unix and GNU/Linux IRC client running from the terminal, written in pure Python. The entire project is licensed under the GNU General Public License, version 2. The website has been done by <a href='https://github.com/CallumBarclay'>Callum Barclay</a>.");
        } else if (command == "/help" || command == "/commands"){
            write("/download, /about, /commands, /features, /sourcecode, /contact");
        } else if (command == "/features"){
            write("SICK has many features. Some include logging, multiple channels in a single terminal window, a high level of configurability, and an extensive api for scripting in Cure (SICK's built-in scripting language), Python, and Bash.")
        } else if(command == "/sourcecode"){
            write("You can view the source code from <a href='https://github.com/weloxux/sick'>GitHub</a> or <a href='http://sourceforge.net/p/sick-client/code/ci/master/tree/'>Sourceforge</a>.")
        } else if(command == "/8ball"){
            var responses = [
                "It is certain",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it, yes",
                "Most likely",
                "Outlook good",
                "Yes",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"
            ];
            
            index = Math.floor(Math.random() * jokes.length)-1;
            write(responses[index]);
        } else if(command == "/cookieclicker"){
            cookies++;
            write("You have clicked " + cookies + " cookies.")
        } else if(command == "/contact"){
            write("For feature request or bugs, create an issue over at our GitHub page. If you have questions, or need support in some other way (or just want to have a nice chat), we can be found in <a href='irc://irc.freenode.net:6667/SICK'>#SICK on freenode</a>. If there's something you want personal contact for (e.g. security problems), you can contact the project leader at <a href='mailto:marnix@vivesce.re'>marnix@vivesce.re</a>.")
        } else{
            write(command + " is not a recognized command. Say \"/commands\" for a list of commands")
        }
    } else{
        chat(text);
    }
}


function getTime(){
    var minutes, days, date = new Date();
    
    if(date.getMinutes().toString().length ==  1){
        var minutes = "0"+date.getMinutes().toString();
    }else{
        var minutes = date.getMinutes().toString();
    }
    
    if(date.getHours().toString().length == 1){
        var hours = "0"+date.getHours().toString();
    }else{
        var hours = date.getHours().toString();
    }
    
    return hours+":"+minutes;
}

function write(text){
    var screen = document.getElementById("screen");
    screen.innerHTML+= "<p class='code'>["+getTime()+"] &lt;<span class='person'>~SICK</span>&gt; "+text+"</p>";
}

var lastText = "";
function getcommand(e){
    if(e.keyCode == 13 && this.value != ""){
        e.preventDefault();
        var text = this.value;
        this.outerHTML = text;
        lastText = text;
        parse(text);
        getUserInput();
    } else if(e.keyCode == 38 && lastText != ""){
        this.value = lastText;
    }
}

function getUserInput(){
    var screen = document.getElementById("screen");
    
    screen.innerHTML+= "<p class='code'>["+getTime()+"] &lt;<span class='personuser'>SICKuser</span>&gt; <input id='input' class='code' type='text' autocomplete='off' autocorrect='off' inputmode='vertabrim'></input> </p>";
    document.getElementById("input").focus();
    document.getElementById("input").onkeydown = getcommand;

}
write("SICK IRC Client - <i>So sick you'll toss your cookies!</i>")
write("Please enter a command, for a list of commands, say \"/commands\".");
getUserInput();

//Chat bot o matic three thousand
//#StillBetterThanCleverBot

//Jokes from http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/
var jokes = [
    "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
    "I used to think the brain was the most important organ. Then I thought, look what’s telling me that.",
    "A farmer in the field with his cows counted 196 of them, but when he rounded them up he had 200.",
    "What does a nosey pepper do? Get jalapeño business.",
    "What is Bruce Lee’s favorite drink? Wataaaaah!",
    "The dyslexic devil worshipper sold his soul to Santa.",
    "You kill vegetarian vampires with a steak to the heart.",
    "There was a prison break and I saw a midget climb up the fence. As he jumped down her sneered at me and I thought, well that’s a little condescending.",
    "If you want to catch a squirrel just climb a tree and act like a nut.",
    "A magician was walking down the street and turned into a grocery store.",
    "A blind man walks into a bar. And a table. And a chair.",
    "Why don’t you ever see hippopotamus hiding in trees? Because they’re really good at it.",
    "Did you hear about the Mexican train killer? He had locomotives.",
    "How does NASA organize their company parties? They planet.",
    "My friend recently got crushed by a pile of books, but he’s only got his shelf to blame.",
    "What’s the best part about living in Switzerland? Not sure, but the flag is a big plus.",
    "Why can’t a bike stand on its own? It’s two tired.",
    "What do you call a big pile of kittens? A meowntain."
];

var hasSaidJoke = false;

function chat(text){
    text = text.toLowerCase();
    hasSpoke = false;
    
    if(text.indexOf("hail eris!") >=0){
        hasSpoke = true;
        write("Hail Discordia!");
    }
    
    if(text.indexOf("hello") >= 0 ||
       text.indexOf("hi") >= 0){
        write("Hi there!");
        hasSpoke = true;
    }
    
    if(text.indexOf("how")>=0 && text.indexOf("are")>=0 && text.indexOf("you")>=0){
        write("Good, you?");
        hasSpoke = true;
    }
    
    if(text.indexOf("joke")>=0 && (text.indexOf("tell")>=0 || text.indexOf("say"))){
        index = Math.floor(Math.random() * jokes.length)-1;
        write(jokes[index]);
        hasSpoke = true;
    }
    
    if(text.indexOf("good")>=0 || text.indexOf("thanks")>=0 || text.indexOf("bad")>=0 || text.indexOf("alright")>=0){
        if(hasSaidJoke){
            write("Would you like to hear another joke?");
        }else{
            write("Would you like to hear a joke?");
        }
        hasSpoke = true;
    }
    
    if(!hasSpoke){
        index = Math.floor(Math.random() * jokes.length)-1;
        write(jokes[index]);
        hasSaidJoke = true;
    }
}
