let points = [40, 100, 1, 5, 25, 10]
points.sort(function(a, b) {
    return a - b
})
document.write(points + "<br>");

points.sort(function(a, b) {
    return b - a
})
document.write(points);