function exercise04(angle) {
    if(angle < 0)
        angle = angle*(-1);
    if(angle > 180)
        angle %= 180

    if(angle < 90)
        return 'Acute angle';
    if(angle === 90)
        return 'Right angle';
    if(angle < 180)
        return 'Obtuse angle'
    if(angle === 180)
        return 'Straight angle'
}