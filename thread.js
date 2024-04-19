function thread(fun) {
    const Thread = Java.use("java.lang.Thread");
    const Runnable = Java.use("java.lang.Runnable");

    Java.perform(()=>{
        var MyRunnable = Java.registerClass({
            name: "com.example."+encodeURIComponent(Math.random()),
            implements: [Runnable],
            methods: {
                run: function() {
                    // Função que será executada na nova thread
                    fun();
                }
            }
        });
    
        var newRunnable = MyRunnable.$new();
        var newThread = Thread.$new(newRunnable);
        newThread.start();
    })

   
}



thread(()=>{
    console.log("Hello from an thread baby")
})