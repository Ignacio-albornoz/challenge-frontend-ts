Para crear un nuevo indicador, debes seguir los siguientes pasos:

1. **Crear un nuevo componente de renderizado de indicador**: Este componente será responsable de cómo se muestra el indicador en la interfaz de usuario. Debe aceptar `description` y `content` como props y devolver un elemento JSX que represente el indicador.

```jsx
import React from 'react';

interface NewIndicatorRenderProps {
  description: string;
  content: number;
}

const NewIndicatorRender: React.FC<NewIndicatorRenderProps> = ({ description, content }) => {
  return (
    <div>
      <h2>{description}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NewIndicatorRender;
```

2. **Crear una nueva clase de indicador**: Esta clase implementará la interfaz `IndicatorModel` y definirá cómo se crea y se renderiza el nuevo indicador.

```typescriptreact
class NewIndicator implements IndicatorModel {
  description: string;
  content: number;

  constructor(description: string, content: number) {
    this.description = description;
    this.content = content;
  }

  render(): JSX.Element {
    return <NewIndicatorRender description={this.description} content={this.content} />;
  }
}
```

3. **Crear una nueva fábrica de indicadores**: Esta fábrica será responsable de crear instancias del nuevo indicador. Debe implementar la interfaz `IndicatorFactory`.

```typescriptreact
class NewIndicatorFactory implements IndicatorFactory {
  makeIndicator({description, content}: IndicatorParams): IndicatorModel {
    return new NewIndicator(description, content);
  }
}
```

4. **Usar la nueva fábrica de indicadores para crear indicadores**: Ahora puedes usar `NewIndicatorFactory` para crear instancias de `NewIndicator`.

```typescriptreact
const newIndicatorFactory = new NewIndicatorFactory();
const newIndicator = newIndicatorFactory.makeIndicator({ description: 'New Indicator', content: 123 });
```

5. **Renderizar el nuevo indicador**: Finalmente, puedes llamar al método `render` en `newIndicator` para renderizar el indicador.

```typescriptreact
newIndicator.render();
```

Estos pasos te permitirán crear y renderizar un nuevo indicador. Recuerda reemplazar `NewIndicator` y `NewIndicatorRender` con los nombres que elijas para tu nuevo indicador y su componente de renderizado.