function bitwiseAnd(x, y)
{
  return x & y;  
}

function bitwiseOr(x, y)
{
  return x | y;
}  

function bitwiseXor(x, y)
{
  return x ^ y;
} 

function bitwiseLeftShift(x, y)
{
  return x << y;
} 

function bitwiseRightShift(x, y)
{
  return x >> y;
} 

function removeSubstring(x, y)
{
  return x.split(y).join("");
}

function awesomeRepeat(x)
{
  return "I am awesome ".repeat(x);
}

function isItPal(x)
{
  return (x).split("").reverse().join("");
}

function numSort()
{
  return points.sort(function(a, b){return a - b});
}

function grades(x)
{
  switch(true) {
    case (x <= 100 && x >= 90):
        return "grade = A";
    case (x <= 89 && x >= 80):
        return "grade = B"
    case (x <= 89 && x >= 70):
        return "grade = C"
    case (x <= 79 && x >= 60):
        return "grade = D"
    case (x <= 59):
        return "grade = F"   
  }
}