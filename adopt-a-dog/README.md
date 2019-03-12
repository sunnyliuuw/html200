Course Project - Adopt A Dogs
  This project is for a best practice of responsive web design. Including Media query,
  images, accessiblity, and semantic.

User Personas
  Name: Chris Timber
  Age: 40
  Occupation: Farmer
  Location: Country side of Texas
  Network Environment: 4mbps downstream and 1mbps upstream
  Purpose of use the site: Adopt a new pet for kid
  Device: Laptop/Phone
  Vision sight: Short

Testing
  Overview of changes after testing:
    The previous device size was 375px for mobile which cause test step 1 failed on my iphone 7 plus.
    Updated media query and image srcset from 375px to 414px to fix the column problem on iphone 6/7/8 plus.
  Device size:
    iPhone 6/7/8 plus:
      Width: 414px
    iPad:
      width: 768px
  Test steps:
    1. On PC or MAC large browser, drag to change the browser width from large to small
    2. On Any device, click every dog pictures
    3. On Any device, click urls and navigator in both header and footer
    4. On Any device, click adopt button
    5. On Any device, load the site in low network speed environment
  Expect result:
    1. In home page, Dog profiles are listing in three columns when width is greater than 768px
      or landscape on iPad;
      Dog profiles are listing in two columns and right side bar disappears when width is less than 768px and greater than 414px or Portrait on iPad;
      Everything is listing in one column when width is less than 414px or mobile device.
    2. Alert dog name, breed, and Cost. Image fits the device size
    3. direct to correct page
    4. Alert total cost. If duplicate choice, alert user the dog has been selected
        Readability: Good font size for reading
        Clickable: Good button size for clicking
    5. Pictures load within 1.5 second
  Testing result:
    Browser Compatibility
      Edge:
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
      Chrome:
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
      IE 11:
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
    OS Compatibility
      Windows 10:
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
      MAC IOS 12:
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
    Device Compatibility
      Tablet: (Tested on iPad)
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
      Phone: (tested on iphone 7 plus and iphone X)
        1. OK!
        2. OK!
        3. OK!
        4. OK!
        5. OK!
