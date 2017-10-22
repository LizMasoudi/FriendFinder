function Friend(name, link, q1, q2, q3, q4, q5, qq, q7, q8, q9, q10) {
    this.name = name;
    this.link = link;
    this.q1answer = q1;
    this.q2answer = q2;
    this.q3answer = q3;
    this.q4answer = q4;
    this.q5answer = q5;
    this.q6answer = q6;
    this.q7answer = q7;
    this.q8answer = q8;
    this.q9answer = q9;
    this.q10answer = q10;
}

var friends = [
    {
        name: "Liz", 
        profilePicture: "https://google.com", 
        q1: 1, 
        q2: 2, 
        q3: 1, 
        q4: 1, 
        q5: 5, 
        q6: 5, 
        q7: 4, 
        q8: 2, 
        q9: 3, 
        q10: 4
    }
];

module.exports = {
    friend: Friend,
    friends: friends
}; 
