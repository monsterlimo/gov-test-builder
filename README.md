# GOV.UK Problem Reporting Prototype

A simple GOV.UK prototype kit service for users to report problems they've experienced. Built using the official GOV.UK prototype kit framework following GOV.UK design principles and accessibility standards.

## About this prototype

This service allows users to:
- Report technical issues, service problems, or accessibility issues
- Provide detailed problem descriptions
- Submit contact details for follow-up
- Review their answers before submission
- Receive confirmation with a reference number

## Screenshots

### Start Page
![Start Page](https://github.com/user-attachments/assets/1c702e07-2cae-4647-ad79-69ab73b1561b)

### Confirmation Page
![Confirmation](https://github.com/user-attachments/assets/2b8943db-92aa-4a4a-908f-11ab415787d1)

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
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

### Development

For production builds:
```bash
npm start
```

## Technical Implementation

This prototype is built using:

- **GOV.UK Prototype Kit 13.17.0** - Official government prototyping framework
- **GOV.UK Frontend 5.11.1** - Latest government design system components
- **SASS** - CSS preprocessing for maintainable styles
- **Nunjucks templating** - Server-side template engine
- **Session management** - Form data persistence across pages

## Project Structure

```
├── app/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.html          # Base layout template
│   │   ├── start.html             # Start page
│   │   ├── user-info.html         # User information form
│   │   ├── problem-details.html   # Problem details form
│   │   ├── check-answers.html     # Check answers summary
│   │   └── confirmation.html      # Confirmation page
│   ├── assets/
│   │   └── sass/
│   │       └── application.scss   # Custom SASS styles
│   ├── routes.js                  # Application routes and logic
│   └── config.json               # Prototype kit configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Key Features

### Complete User Journey
- **Session-based data persistence** across all pages
- **Change functionality** - users can modify answers from check page
- **Form validation** and error handling
- **Accessible design** following WCAG 2.1 guidelines

### GOV.UK Standards Compliance
- Uses official GOV.UK Frontend components
- Follows GOV.UK Design System patterns
- Implements government design principles
- Responsive design that works on all devices
- Clear, user-friendly language following content guidelines

### Development Best Practices
- Clean, maintainable code structure
- SASS preprocessing for CSS
- Proper templating with Nunjucks
- Ready for extension and customization

## How to Use

1. Navigate to the start page
2. Click "Start now" to begin the journey
3. Fill in your contact details
4. Provide problem details and description
5. Review your answers on the check page
6. Submit your problem report
7. Receive confirmation with reference number

## Standards Compliance

This prototype follows:
- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [Government Design Principles](https://www.gov.uk/guidance/government-design-principles)  
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard)

The service is production-ready and provides a solid foundation for further development or user testing.