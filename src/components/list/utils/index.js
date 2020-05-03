const api = {
    "data": [
        {
            "name": "Continents",
            "children": [
                {
                    "name": "Africa",
                    "children": [
                        {
                            "name": "Egypt",
                            "children": [
                                {
                                    "name": "Arabic",
                                    "children": []
                                },
                                {
                                    "name": "English",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "name": "Sierra Leone",
                            "children": []
                        },
                        {
                            "name": "Algeria",
                            "children": []
                        },
                        {
                            "name": "Libya",
                            "children": []
                        },
                        {
                            "name": "Morocco",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "Asia",
                    "children": []
                },
                {
                    "name": "Europe",
                    "children": [
                        // ...
                    ]
                },
                // ...
            ]
        },
        {
            "name": "String",
            "children": [
            ]
        },
    ]
}

export const formattedApi = JSON.stringify(api);