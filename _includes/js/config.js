var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
      primary: themeStyle.colors.primary
  }
});

var datasetKeys = [
    '8937c4d6-a9c8-4207-a1f2-4022acb6c171', // has occurrence LC
    '6caefe2d-d90b-4d66-8b10-122ccf952b7c' // has dataset machine tag
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
    //   {
    //       "id": "collectionSearch"
    //   },
    //   {
    //       "id": "collectionKey"
    //   },
    //   {
    //       "id": "datasetSearch"
    //   },
      {
          "id": "datasetKey"
      },
    //   {
    //       "id": "institutionKey"
    //   },
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
    //   "defaultEnabledTableColumns": [
    //       "features",
    //       "catalogNumber",
    //       "country",
    //       "year",
    //       "recordedBy",
    //       "identifiedBy"
    //   ],
      "tabs": [
          "table",
          "gallery",
          "map",
          "dashboard",
          "download"
      ],
      "mapSettings": {
          "lat": 0,
          "lng": 0,
          "zoom": 1
      }
  },
  "collectionSearch": {
      excludedFilters: ['country', 'active'],
      // highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
      // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
      scope: {
          institutionKey: institutionKeys,
          active: true
      },
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