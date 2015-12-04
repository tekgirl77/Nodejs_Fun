/**
 * Created by Salle on 12/3/15.
 */


//A = [1,0,0,1,1]; //9
//A = [1,1,0,1]; //-9
A = [1,0,0,1,1,1]; //-23

sum = function(A) {
    var X = 0,
        Y = 0;
    for (var i = 0; i < A.length; i++) {
        console.log(i + ' : ' + A[i]);
        X += A[i] * Math.pow(-2,i);
        console.log("X: ", X);
    }
    Y = -X;
    console.log("Set Y to negative X: " + Y);
    console.log("---------");
    result = function(Y) {
        var count = 1;
        function dec2bin(dec){
            return (dec).toString(2).split("");
        }
        while (count < 2048) {
            var results = []
                sum = 0;
            results = dec2bin(count);
            console.log("First results are: " + results);
            for (var k = results.length-1; k--;) {
                if ((results[k] == 1) && (k = results.length-1)) {
                    console.log("1 is already the last digit, no slice needed.")
                    break;
                } else if (results[k] == 1) {
                    results = results.slice(0, k + 1);
                    console.log("Second sliced results are: ", results);
                    break;
                    }
            }
            for (var j = 0; j < results.length; j++) {
                sum += results[j] * Math.pow(-2, j);
                console.log("Checking results..." + sum);
                if (sum == Y) {
                    console.log("Final results are: ", results);
                    return results;
                }
            }
            count++;
        }
    };
    result = result(Y);
    return result;
};



console.log(sum(A));