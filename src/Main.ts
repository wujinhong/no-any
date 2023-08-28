class Main {

    public static startGame():void
    {
        start_time = 20230828;

        admin = "gordon";
        
        isAvailable = true;
    }

    public static readonly get:User = {
        name: "Gordon",
        age: start_time + 30,
        lover: "Lucy"
    };
}

Main.startGame();