const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
  min: 8,
  max: 35,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  requirementCount: 8,
};

const signUpValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(2)
      .max(35)
      .required()
      .pattern(new RegExp("^[a-zA-Z- çôéè]{2,35}$"))
      .messages({
        "string.empty": "<b>First Name</b> field should not be blank.",
        "string.min":
          "<b>First Name</b> field should have at least 2 characters in length.",
        "string.max":
          "<b>First Name</b> field should not exceed 35 characters in length.",
        "string.pattern.base":
          "<b>First Name</b> must only have alphabetical characters.",
      }),
    lastName: Joi.string()
      .trim()
      .min(2)
      .max(35)
      .required()
      .pattern(new RegExp("^[a-zA-Z- çôéè]{2,35}$"))
      .messages({
        "string.empty": "<b>Last Name</b> field should not be blank.",
        "string.min":
          "<b>Last Name</b> field should have at least 2 characters in length.",
        "string.max":
          "<b>Last Name</b> field should not exceed 35 characters in length.",
        "string.pattern.base":
          "<b>Last Name</b> must only have alphabetical characters.",
      }),
    email: Joi.string().trim().email({ minDomainSegments: 2 }).messages({
      "string.empty": "<b>Email</b> field should not be blank.",
      "string.email":
        "<b>Email</b> must include '@' in the Email address or it may include some formatting errors.",
    }),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "<b>Email</b> field should not be blank.",
        "string.email":
          "<b>Email</b> must include '@' in the Email address or it may include some formatting errors.",
      }),
    remember: Joi.boolean(),
  });
  return schema.validate(data);
};

const detailsValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(2)
      .max(35)
      .required()
      .pattern(new RegExp("^[a-zA-Z- çôéè]{2,35}$"))
      .messages({
        "string.empty": "<b>First Name</b> field should not be blank.",
        "string.min":
          "<b>First Name</b> field should have at least 2 characters in length.",
        "string.max":
          "<b>First Name</b> field should not exceed 35 characters in length.",
        "string.pattern.base":
          "<b>First Name</b> must only have alphabetical characters.",
      }),
    lastName: Joi.string()
      .trim()
      .min(2)
      .max(35)
      .required()
      .pattern(new RegExp("^[a-zA-Z- çôéè]{2,35}$"))
      .messages({
        "string.empty": "<b>Last Name</b> field should not be blank.",
        "string.min":
          "<b>Last Name</b> field should have at least 2 characters in length.",
        "string.max":
          "<b>Last Name</b> field should not exceed 35 characters in length.",
        "string.pattern.base":
          "<b>Last Name</b> must only have alphabetical characters.",
      }),
    email: Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "<b>Email</b> field should not be blank.",
        "string.email":
          "<b>Email</b> must include '@' in the Email address or it may include some formatting errors.",
      }),
  });
  return schema.validate(data);
};







const applicationValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    contractType: Joi.string(),
    locum_ahpra: Joi.string(),
    locum_payroll: Joi.string(),
    locum_airport: Joi.string(),
    slugId: Joi.string(),
    nanoslug: Joi.string(),
    caseId: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    locum_startDate: Joi.string(),
    locum_finishDate: Joi.string(),
    photo: Joi.string().allow(""),
    streetNo: Joi.string().trim().min(1).max(10).allow(""),
    street: Joi.string().trim().min(1).max(50),
    postalCode: Joi.string().trim().min(4).max(4).allow(""),
    state: Joi.string().trim().min(2).max(3).allow(""),
    suburb: Joi.string().trim().min(2).max(50).allow(""),
    country: Joi.string().trim().min(9).max(9).valid("Australia"),
    latitude: Joi.number(),
    longitude: Joi.number(),
    airport: Joi.string().trim().allow(""),
    airtravel: Joi.boolean(),
    roadtravel: Joi.boolean(),
    accommodation: Joi.boolean(),
    normal_rate: Joi.string().trim().allow(""),
    sat_rate: Joi.string().trim().allow(""),
    sun_rate: Joi.string().trim().allow(""),
    ph_rate: Joi.string().trim().allow(""),
    professions: Joi.string(),
    dateAdListed: Joi.string(),
    available_start: Joi.string(),
    available_finish: Joi.string(),
  });

  return schema.validate(data);
};

const listingEditValidation = (data) => {
  const schema = Joi.object({
    normal_rate: Joi.string()
      .trim()
      .min(2)
      .max(4)
      .allow("")
      .pattern(new RegExp("^[1-9][0-9]{2,}|[2-9][0-9]{1}|2[0-9][0-9]$"))
      .messages({
        "string.min":
          "<b>Weekday rate</b> needs to be minimum of $20 per hour and digits cannot begin with a 0.",
        "string.pattern.base":
          "<b>Weekday rate</b> needs to be minimum of $20 per hour and digits cannot begin with a 0.",
      }),
    sat_rate: Joi.string()
      .trim()
      .min(2)
      .max(5)
      .allow("")
      .pattern(new RegExp("^[1-9][0-9]{2,}|[3-9][0-9]{1}|3[0-9][0-9]$"))
      .messages({
        "string.min":
          "<b>Saturday rate</b> needs to be minimum of $30 per hour and digits cannot begin with a 0.",
        "string.pattern.base":
          "<b>Saturday rate</b> needs to be minimum of $30 per hour and digits cannot begin with a 0.",
      }),
    sun_rate: Joi.string()
      .trim()
      .min(2)
      .max(5)
      .allow("")
      .pattern(new RegExp("^[1-9][0-9]{2,}|[4-9][0-9]{1}|4[0-9][0-9]$"))
      .messages({
        "string.min":
          "<b>Sunday rate</b> needs to be minimum of $40 per hour and digits cannot begin with a 0.",
        "string.pattern.base":
          "<b>Sunday rate</b> needs to be minimum of $40 per hour and digits cannot begin with a 0.",
      })
      .options({
        stripUnknown: true,
        abortEarly: false,
        allowUnknown: true,
      }),
    ph_rate: Joi.string()
      .trim()
      .min(2)
      .max(5)
      .allow("")
      .pattern(new RegExp("^[1-9][0-9]{2,}|[4-9][0-9]{1}|4[0-9][0-9]$"))
      .messages({
        "string.min":
          "<b>Public Holiday rate</b> needs to be minimum of $40 per hour and digits cannot begin with a 0.",
        "string.pattern.base":
          "<b>Public Holiday  rate</b> needs to be minimum of $40 per hour and digits cannot begin with a 0.",
      })
      .options({
        stripUnknown: true,
        abortEarly: false,
        allowUnknown: true,
      }),
    airport: Joi.string().trim().allow(""),
    airtravel: Joi.boolean(),
    roadtravel: Joi.boolean(),
    accommodation: Joi.boolean(),
    firstName: Joi.string().trim().min(2).max(35),
    lastName: Joi.string().trim().min(2).max(35),
    email: Joi.string().trim().email({ minDomainSegments: 2 }),
    caseId: Joi.string(),
    contractType: Joi.string(),
    slug: Joi.string(),
    professions: Joi.string(),
    todaysDate: Joi.string(),
    // Start and finish dates
    startDate: Joi.string().allow(""),
    finishDate: Joi.string().allow(""),
    monday: Joi.boolean(),
    tuesday: Joi.boolean(),
    wednesday: Joi.boolean(),
    thursday: Joi.boolean(),
    friday: Joi.boolean(),
    saturday: Joi.boolean(),
    sunday: Joi.boolean(),
    monHr: Joi.number().allow(""),
    tueHr: Joi.number().allow(""),
    wedHr: Joi.number().allow(""),
    thuHr: Joi.number().allow(""),
    friHr: Joi.number().allow(""),
    satHr: Joi.number().allow(""),
    sunHr: Joi.number().allow(""),
    monStart: Joi.string().trim().allow(""),
    tueStart: Joi.string().trim().allow(""),
    wedStart: Joi.string().trim().allow(""),
    thuStart: Joi.string().trim().allow(""),
    friStart: Joi.string().trim().allow(""),
    satStart: Joi.string().trim().allow(""),
    sunStart: Joi.string().trim().allow(""),
    monFinish: Joi.string().trim().allow(""),
    tueFinish: Joi.string().trim().allow(""),
    wedFinish: Joi.string().trim().allow(""),
    thuFinish: Joi.string().trim().allow(""),
    friFinish: Joi.string().trim().allow(""),
    satFinish: Joi.string().trim().allow(""),
    sunFinish: Joi.string().trim().allow(""),
    payout: Joi.number().allow(""),
    // About
    about: Joi.string().trim().min(50).max(2000).required().messages({
      "string.empty": "This field cannot be blank.",
      "string.min": "A minimum of 50 characters is required.",
      "string.max": "A limitation of 2000 characters is permitted.",
    }),
    country: Joi.string()
      .trim()
      .min(9)
      .max(9)
      .valid("Australia")
      .required()
      .messages({
        "string.empty":
          "The search area needs to be within the jurisdiction of Australia.",
        "string.min":
          "The search area needs to be within the jurisdiction of Australia.",
        "any.only":
          "The search area needs to be within the jurisdiction of Australia.",
      }),
    latitude: Joi.number(),
    longitude: Joi.number(),
    state: Joi.string().trim().min(2).max(3).allow(""),
    suburb: Joi.string().trim().min(2).max(50).allow(""),
    postalCode: Joi.string().trim().min(4).max(4).allow(""),
    street: Joi.string().trim().min(2).max(50).required().messages({
      "string.empty": "The address need to at least include a street name.",
      "string.min": "The address need to at least include a street name.",
      "string.max": "The address need to at least include a street name.",
    }),
    streetNo: Joi.string()
      .trim()
      .min(1)
      .max(10)
      .allow("")
      .pattern(new RegExp("^[a-zA-Z-0-9 ]{1,10}$")),
  });

  return schema.validate(data);
};

const smValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(2)
      .max(35)
      .required()
      .pattern(new RegExp("^[a-zA-Z- çôéè]{2,35}$"))
      .messages({
        "string.empty": "<b>First Name</b> field should not be blank.",
        "string.min":
          "<b>First Name</b> field should have at least 2 characters in length.",
        "string.pattern.base":
          "<b>First Name</b> must only have <b>alphabetical characters</b>.",
      }),
    email: Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
      })
      .messages({
        "string.empty": "<b>Email</b> field should not be blank.",
        "string.email":
          "<b>Email</b> must include '@' in the Email address or includes formatting errors.",
      }),
  });
  return schema.validate(data);
};

module.exports.signUpValidation = signUpValidation;
module.exports.loginValidation = loginValidation;
module.exports.detailsValidation = detailsValidation;
module.exports.applicationValidation = applicationValidation;
module.exports.listingEditValidation = listingEditValidation;
module.exports.smValidation = smValidation;
