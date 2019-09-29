module.exports = {
    layout: 'about',
    children: false,
    fields: [
        {
            fieldname: 'headline',
            fieldtype: 'text',
            fieldcontent: 'testing text ala blahblah'
        },
        {
            fieldname: 'paragraph',
            fieldtype: 'text',
            fielddescription: 'change this to something better',
            fieldcontent: 'testing this'
        },
        {
            fieldname: 'headerImage',
            fieldtype: 'image',
            fielddescription: 'beautiful flower',
            fieldcontent: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80'
        }  
    ]
}



