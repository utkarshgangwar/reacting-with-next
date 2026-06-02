function throttle<T extends (...expensiveFn: any[]) => any> (
    expensiveFn: T, 
    limit:number
) : (...args: Parameters<T>) => any {
    let flag = true;
    return function(this: any, ...args: Parameters<T>) {
        if(flag){
            expensiveFn.apply(this, args)
            flag = false;

            setTimeout(()=>{
                flag = true;
            }, limit);
        }
    }
}