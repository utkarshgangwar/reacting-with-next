function throttle<T extends (...expensiveFn: any[]) => any> (
    expensiveFn: T, 
    limit:number
) : (...args: Parameters<T>) => any {
    let flag = true;
    return function() {
        if(flag){
            expensiveFn()
            flag = false;
        }
        setTimeout(()=>{
            flag = true;
        }, limit);
    }
}