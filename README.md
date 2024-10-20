# Panelist

Cool application to show a profile screen fora a panelist of your twin activities!

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. ### Run the app

| Command     | Description      |
| ----------- | ---------------- |
| `npm start` | Runs in dev mode |
| `npm test`  | Runs Unit tests  |

## Approach

#### Data fetching and management

The initial data is read from mock json files separeted by concerns (Admin and Panel data).

Also, `reduxjs-toolkit` is used for state management and the initial fetch is done by an async action to already provide support to real API request.

#### Translations

`i18n` is used to handle translations, but only English is supported for now.

#### Navigation

This project also uses `react-router-dom` to handle navigation, although the only populated page is `twin/panel`

#### Tests

There are unit tests with `jest` for the following utility logics:

- Group activities by month
- Format date
- Sort activity by date

## Final Considerations

It's important to keep in mind that this project's working time was only a few hours, so I had to compromise in order to deliver a working MVP. Bellow is a list of topics I would have worked better with more time:

- Plotting the chart for interaction timeline using `vega charts`
- Properly handling folders logic on "My teams" section (it's just hardcoded for now)
- Increase overall test coverage with e2e tests using `cypress`:

  - Assure that all components are rendered properly
  - Clicking events provide correct route redirection

## Suggested UI improvements

- Implement a visual indicator for the active route
- Clarify "Interview" Status (maybe adding a tooltip)
- Adding legend to activities icons on "Twin activities" section
- Adding legend to "Interation timeline" chart
