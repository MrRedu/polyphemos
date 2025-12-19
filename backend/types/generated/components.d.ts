import type { Schema, Struct } from '@strapi/strapi';

export interface BlogArticle extends Struct.ComponentSchema {
  collectionName: 'components_blog_articles';
  info: {
    displayName: 'Article';
    icon: 'stack';
  };
  attributes: {
    author: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    label: Schema.Attribute.Enumeration<
      ['Desarrollo', 'IA', 'Dise\u00F1o UX/UX']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Desarrollo'>;
    multimedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    published: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface ComponentsCardPost extends Struct.ComponentSchema {
  collectionName: 'components_components_card_posts';
  info: {
    displayName: 'Card Post';
  };
  attributes: {
    author: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String;
    published: Schema.Attribute.Date;
    summary: Schema.Attribute.Text;
    tags: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'dashboard';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_sections';
  info: {
    displayName: 'Blog Section';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }> &
      Schema.Attribute.DefaultTo<'Blog posts'>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'files' | 'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.article': BlogArticle;
      'components.card-post': ComponentsCardPost;
      'components.link': ComponentsLink;
      'layout.blog-section': LayoutBlogSection;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
