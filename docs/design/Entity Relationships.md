# Entity Relationships

## ER Diagram

```mermaid

erDiagram

    locales {
        int     id              PK
        string  english_name
        string  localized_name
        string  code
    }

    tech_stacks {
        int     id                      PK
        string  name
        string  image_url
        string  image_url_alt
        int     tech_stack_category_id  FK
    }

    tech_stack_categories {
        int     id              PK
        string  english_name
    }

    tech_stack_category_translations  {
        int     id                      PK
        int     tech_stack_category_id  FK
        int     locale_id               FK
        string  name
    }

    companies {
        int     id              PK
        string  english_name
    }

    company_translations {
        int     id          PK
        string  name
        string  description
        int     locale_id   FK
        int     company_id  FK
    }

    locations {
        int     id              PK
        string  english_country
        string  english_province
        string  english_city
    }

    location_translations {
        int     id          PK
        string  country
        string  province
        string  city
        int     location_id FK
        int     locale_id   FK
    }

    work_modes {
        int     id              PK
        string  english_name
    }

    work_mode_translations {
        int     id              PK
        string  name
        int     work_mode_id    FK
        int     locale_id       FK
    }

    projects {
        int     id              PK
        string  english_name
    }

    project_translations {
        int     id          PK
        string  name
        string  description
        int     project_id  FK
        int     locale_id   FK
    }

    employment_types {
        int     id              PK
        string  english_name
    }

    employment_type_translations {
        int     id                  PK
        string  name
        int     employment_type_id  FK
        int     locale_id           FK
    }

    work_experiences {
        int     id                  PK
        int     company_id          FK
        date    start_date
        date    end_date
        int     employment_type_id  FK
        int     work_mode_id        FK
        string  daily_languages
    }

    work_experience_translations {
        int     id                  PK
        string  position_title
        string  description
        int     work_experience_id  FK
        int     locale_id           FK
    }

```

## Tables Explanation

### locales

What locales are being supported by this project. This is made because I want to make it so that I can cast the widest net. Japanese because I currently live in Japan, English so that I could work at an international company, Indonesian for when I need to work back in the motherland.

### tech_stacks

What technology is being used in a project. Created so that we could add functionality like filtering projects that use a particular technology. There are 2 image URLs because I want to add a feature to toggle between the professional logo and the cute v-tuber inspired one. I just found it to be extremely neat.

### tech_stack_categories

How to classify the tech-stack. This is is so that we could add feature that group tech-stacks based on their similarity.

### tech_stack_category_translations

Translation table for [tech_stack_categories](#tech_stack_category_translations).

### companies

Companies that I have worked for.

### company_translations

Translation table for [companies](#companies).

### locations

Where I live during that time period.

### location_translations

Translation table for [locations](#locations).

### work_modes

The physical work arrangement for the position.

### work_mode_translations

Translation table for [work_modes](#work_modes).

### projects

What kind of project (both professional and personal) that I have done.

### project_translations

Translation table for [project](#projects).

### employment_types

The nature of the employment contract.

### employment_type_translations

Translation table for [employment_types](#employment_types).

### work_experiences

### work_experience_translations
