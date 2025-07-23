# GOV.UK Problem Reporting Prototype

A simple GOV.UK prototype kit service for users to report problems they've experienced. Built following GOV.UK design principles and accessibility standards.

## About this prototype

This service allows users to:
- Report technical issues, service problems, or accessibility issues
- Provide detailed problem descriptions
- Submit contact details for follow-up
- Review their answers before submission
- Receive confirmation with a reference number

## Screenshots

### Start Page
![Start Page](https://github.com/user-attachments/assets/9caa5ca8-646f-4ada-8f91-8596a6c3e00d)

### Check Answers Page
![Check Answers](https://github.com/user-attachments/assets/c2a76599-6f11-4497-9d56-542d513f8cf4)

### Confirmation Page
![Confirmation](https://github.com/user-attachments/assets/a3ac2256-66e8-4ebf-b64a-eda29ca67de0)

## User Journey

The service follows a simple 5-step journey:

1. **Start page** - Introduction and overview of the service
2. **User information** - Collect name, email, and optional phone number
3. **Problem details** - Collect problem type, description, and when it happened
4. **Check answers** - Review all information with ability to change answers
5. **Confirmation** - Success message with reference number and next steps

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/monsterlimo/gov-test-builder.git
   cd gov-test-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

### Development

For development with auto-restart on file changes:
```bash
npm run dev
```

## Project Structure

```
├── app.js                    # Main application server
├── package.json              # Project dependencies and scripts
├── app/
│   ├── routes/
│   │   └── index.js          # Application routes
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.html     # Base layout template
│   │   ├── start.html        # Start page
│   │   ├── user-info.html    # User information form
│   │   ├── problem-details.html # Problem details form
│   │   ├── check-answers.html    # Check answers summary
│   │   └── confirmation.html     # Confirmation page
│   └── assets/
│       ├── css/
│       │   ├── govuk-frontend.css # GOV.UK styles
│       │   └── application.css    # Custom styles
│       ├── js/
│       │   └── govuk-frontend.js  # GOV.UK JavaScript
│       ├── images/           # GOV.UK assets
│       └── fonts/            # GOV.UK fonts
```

## Features

### GOV.UK Design System
- Uses official GOV.UK Frontend components and styling
- Responsive design that works on all devices
- Accessible forms with proper labels and hints
- GOV.UK typography, colors, and spacing

### Form Handling
- Session-based data storage
- Form validation
- Pre-populated fields when changing answers
- Clear error handling

### User Experience
- Clear, accessible language following GOV.UK content guidelines
- Logical flow with back/forward navigation
- Summary page with change links
- Confirmation page with reference number

### Technical Features
- Express.js server with Nunjucks templating
- Session management for form data
- Static asset serving
- Clean, maintainable code structure

## Extending the Service

The service is designed for easy extension:

### Adding New Fields
1. Update the relevant form template in `app/views/`
2. Add form handling in `app/routes/index.js`
3. Update the check answers page template

### Adding New Pages
1. Create new view template in `app/views/`
2. Add route handlers in `app/routes/index.js`
3. Update navigation flow

### Custom Styling
Add custom CSS to `app/assets/css/application.css`

## Testing

The service can be tested locally by:
1. Starting the server (`npm start`)
2. Going through the complete user journey
3. Testing form validation
4. Testing the change answers functionality
5. Verifying the confirmation page

## Deployment

This prototype is ready for deployment to any Node.js hosting platform:
- Heroku
- AWS
- Digital Ocean
- Government PaaS

Ensure environment variables are set for production deployment.

## Standards Compliance

This prototype follows:
- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [Government Design Principles](https://www.gov.uk/guidance/government-design-principles)
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- GOV.UK Service Standard

## License

This project is licensed under the MIT License - see the GOV.UK prototype kit license for details.