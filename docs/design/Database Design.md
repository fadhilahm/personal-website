# Database Design

## ER Diagram

```mermaid

erDiagram

    locales {
        int     id              PK
        string  english_name
        string  localized_name
    }

    tech_stacks {
        int     id                      PK
        string  name
        string  image_url
        string  image_url_alt
        int     tech_stack_category_id  FK
    }

```

## Tables Explanation

### Locales

What locales are being supported by this project. This is made because I want to make it so that I can cast the widest net. Japanese because I currently live in Japan, English so that I could work at an international company, Indonesian for when I need to work back in the motherland.

### tech_stacks

What technology is being used in a project. Created so that we could add functionality like filtering projects that use a particular technology. There are 2 image URLs because I want to add a feature to toggle between the professional logo and the cute v-tuber inspired one. I just found it to be extremely neat.
