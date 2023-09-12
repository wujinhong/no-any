class Main
{
    public static readonly get: User = {
        name: "Gordon",
        age: start_time + 30,
        lover: "Lucy",
        data: 56
    };

    public static readonly admin: User = {
        name: "Gordon",
        age: start_time + 30,
        lover: "Lucy",
        data: [ 8, 9, 10 ]
    };
    
    public static startGame(): void
    {
        start_time = 20230828;

        admin = "gordon";

        isAvailable = true;
    }
}

Main.startGame();