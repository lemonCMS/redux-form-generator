export default function form() {

  return ([
/*    {
      name: 'type',
      label: 'Pagina type',
      type: 'select',
      placeholder: 'Menu titel',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10',
      options: [
        {value: 'home', desc: 'Home'},
        {value: 'generic', desc: 'Generic'},
        {value: 'zoeken', desc: 'Zoeken'},
        {value: 'contact', desc: 'Contact'},
        {value: 'register', desc: 'Registreren'},
        {value: 'verify', desc: 'Registratie bevestigen'},
        {value: 'login', desc: 'Login'},
        {value: 'logout', desc: 'Uitloggen'},
        {value: 'password', desc: 'Wachtwoord vergeten'},
        {value: 'password-reset', desc: 'Wachtwoord herstel'},
        {value: 'dashboard-overzicht', desc: 'Dashboard/Overzicht'},
        {value: 'dashboard-registreer', desc: 'Dashboard/Registreer'},
        {value: 'dashboard-affiliates', desc: 'Dashboard/Affiliates Koppelen'},
        {value: 'dashboard-gegevens', desc: 'Dashboard/Gegevens'},
        {value: 'dashboard-invoices', desc: 'Dashboard/Facturen'},
        {value: 'dashboard-leads', desc: 'Dashboard/Leads'}
      ]
    },*/
    {
      name: 'field_1',
      label: 'Field 1',
      helper: 'How are you today?',
      type: 'text',
      bsSize: 'large',
      placeholder: 'Field 1',
      addonBefore: '@',
      addonAfter: '@',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      }
    },
    {
      name: 'field_2',
      label: 'Field 2',
      type: 'text',
      bsSize: 'large',
      placeholder: 'Field 2',
      addonBefore: '@',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      buttonAfter: {
        type: 'button',
        value: 'Button after'
      }
    },
    {
      name: 'field_3',
      label: 'Field 3',
      type: 'select',
      bsSize: 'large',
      placeholder: 'Field 3',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      options: [
        {value: '1', desc: 'Value 1'},
        {value: '2', desc: 'Value 2'},
        {value: '3', desc: 'Value 3'},
        {value: '4', desc: 'Value 4'}
      ]
    },
    {
      name: 'field_4',
      label: 'Field 4',
      type: 'radio',
      bsSize: 'large',
      placeholder: 'Field 4',
      labelSize: {
        md: 2
      },
      fieldSize: {
        md: 10
      },
      options: [
        {value: '1', desc: 'Value 1'},
        {value: '2', desc: 'Value 2'},
        {value: '3', desc: 'Value 3'},
        {value: '4', desc: 'Value 4'}
      ]
    },

    /* {
      name: 'slug',
      label: 'Slug',
      type: 'static',
      placeholder: 'Slug',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'page_title',
      label: 'Pagina titel',
      type: 'text',
      placeholder: 'Pagina titel',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'header',
      label: 'Header',
      type: 'text',
      placeholder: 'Header',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'sub_header',
      label: 'Sub-header',
      type: 'text',
      placeholder: 'Sub-header',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'active',
      label: 'Actief',
      type: 'checkbox',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-offset-2 col-md-10'
    },
    {
      'name': 'keywords',
      'label': 'Keywords',
      'type': 'textarea',
      'placeholder': 'Inhoud',
      'labelClassName': 'col-md-2',
      'wrapperClassName': 'col-md-10',

    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      placeholder: 'Inhoud',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10'
    },
    {
      name: 'html',
      label: 'Inhoud',
      type: 'rte',
      placeholder: 'Inhoud',
      labelClassName: 'col-md-2',
      wrapperClassName: 'col-md-10',
      config: {
        height: '250px',
        entity_encoding: 'raw',
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code template'
        ],
        formats: {
          custom_format: {block: 'h1', attributes: {title: 'Header'}, styles: {color: 'red'}},
          italic: {inline: 'i', 'classes': 'italic'},
        },
        style_formats: [
          {title: 'h1', block: 'h1'},
          {title: 'h2', block: 'h2'},
          {title: 'h3', block: 'h3'},
          {title: 'h4', block: 'h4'},
          {title: 'h5', block: 'h5'},
          {title: 'h6', block: 'h6'},
          {title: 'p', block: 'p'},
          {title: 'div', block: 'div'},
          {title: 'container', block: 'div', classes: 'container', wrapper: true, merge_siblings: false},
          {title: 'container-fluid', block: 'div', classes: 'container-fluid', wrapper: true, merge_siblings: false},
          {title: 'pre', block: 'pre'},
          {title: 'section', block: 'section', wrapper: true, merge_siblings: false},
          {title: 'article', block: 'article', wrapper: true, merge_siblings: false},
          {title: 'blockquote', block: 'blockquote', wrapper: true},
          {title: 'header', block: 'header', wrapper: true},
          {title: 'hgroup', block: 'hgroup', wrapper: true},
          {title: 'aside', block: 'aside', wrapper: true},
          {title: 'figure', block: 'figure', wrapper: true}
        ],
        verify_html: false,
        end_container_on_empty_block: true,
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor emoticons insert',
      }
    },*/
    {
      row: {
        hideOnStatic: true,
        col: [
          {
            md: 10, mdOffset: 2, children: [
              {type: 'success', message: 'Het formulier is opgeslagen'},
              {type: 'error', message: 'Er zijn fouten opgetreden, controleer het formulier.'}
            ]
          },
          {hideOnStatic: true, md: 10, mdOffset: 2, children: [{type: 'submit', name: 'submit', value: 'versturen'}]}
        ]
      }
    }
  ]);
}
