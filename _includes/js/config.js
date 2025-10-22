var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: 'light', extendWith: {
        primary: themeStyle.colors.primary
    }
});

var datasetKeys = [    
    'df582950-3b58-11dc-8c19-b8a03c50a862',
    'ee27b1b0-3b55-11dc-8c18-b8a03c50a862',
    '6e4b215e-9019-4934-8433-65d80a35c230',
    '3c6e7390-3b56-11dc-8c19-b8a03c50a862',
    '8b8c78fb-53d7-434c-b800-61f38b30d0c9'
];

var siteConfig = {
    "version": 3,
    experimentalFeatures: {
        localContextEnabled: true
    },
    "pages": [
        {
            "id": "occurrenceSearch"
        },
        {
            "id": "datasetKey"
        },
        {
            "id": "literatureSearch"
        }
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        "OCCURRENCE",
        "LITERATURE"
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": "#001972",
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        "mapStyles": {
            "defaultProjection": "MERCATOR",
            "defaultMapStyle": "BRIGHT",
            "options": {
                "MERCATOR": [
                    "BRIGHT",
                    "NATURAL"
                ]
            }
        }
    },
    "languages": [
        {
            "code": "en",
            "localeCode": "en",
            "label": "English",
            "default": true,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        },
        {
            "code": "da",
            "localeCode": "da",
            "label": "Dansk",
            "default": false,
            "textDirection": "ltr",
            "iso3LetterCode": "dan",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        "scope": {
            "type": "in",
            "key": "datasetKey",
            "values": datasetKeys
        },
        "highlightedFilters": [
            "taxonKey",
            "verbatimScientificName",
            "institutionKey",
            "collectionKey",
            "catalogNumber",
            "recordedBy",
            "identifiedBy"
        ],
        "excludedFilters": [
            "occurrenceStatus",
            "networkKey",
            "hostingOrganizationKey",
            "protocol",
            "publishingCountry",
            "institutionCode",
            "collectionCode"
        ],
        "tabs": [
            "table",
            "gallery",
            "map",
            "datasets",
            "dashboard",
            "download"
        ],
        "mapSettings": {
            "lat": 0,
            "lng": 0,
            "zoom": 1
        }
    },
    "institutionSearch": {},
    "publisherSearch": {},
    "literatureSearch": {
        "scope": {
            "type": "in",
            "key": "gbifDatasetKey",
            "values": datasetKeys
        }
    }
}
