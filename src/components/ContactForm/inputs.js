const inputs = [
    {
        "tagType":"input",
        "id":"fullname",
        "name":"fullname",
        "label": "Full Name",
        "type":"text",
        "placeholder":" ",
        "autoComplete":"off",
        "pattern":"^[A-Za-z\\s]{3,20}$",
        "required":true,
        "errorMessage": "Full Name should only include letters and between 3-20 characters."
    },
    {
        "tagType":"input",
        "id":"email",
        "name":"email",
        "label": "Email",
        "type":"email",
        "placeholder":" ",
        "autoComplete":"off",
        "required":true,
        "errorMessage": "Please enter a valid e-mail."
    },
    {
        "tagType":"textarea",
        "id":"message",
        "name":"message",
        "label":"Message",
        "placeholder":" ",
        "rows":7,
        "required":true,
        "errorMessage": "Please write a message."
    }
]

export default inputs;