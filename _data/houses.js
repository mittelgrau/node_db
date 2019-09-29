module.exports = {
    layout: 'houses',
    has_children: true,
    children: [
        {
            child_name: 'houseA',
            fields: [
                {
                    fieldname: 'headline',
                    fieldtype: 'text',
                    fieldcontent: 'blahblahblah'
                },
                {
                    fieldname: 'description',
                    fieldtype: 'text',
                    fieldcontent: 'blahblahblah'
                },
                {
                    fieldname: 'activated',
                    fieldtype: 'boolean',
                    fieldcontent: false
                }
            ]
        },
        {
            child_name: 'houseA',
            fields: [
                {
                    fieldname: 'headline',
                    fieldtype: 'text',
                    fieldcontent: 'blahblahblah'
                },
                {
                    fieldname: 'description',
                    fieldtype: 'text',
                    fieldcontent: 'blahblahblah'
                },
                {
                    fieldname: 'activated',
                    fieldtype: 'boolean',
                    fieldcontent: false
                }
            ]
        },

    ],
    fields: [
        {
            fieldname: 'headline',
            fieldtype: 'text',
            fieldcontent: 'texting text'
        },
        {
            fieldname: 'paragarph',
            fieldtype: 'text',
            fieldescription: 'write some nice things'
        }
    ]
}