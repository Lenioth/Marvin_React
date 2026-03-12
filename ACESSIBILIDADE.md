# Guia de Acessibilidade - Marvin Grinn App

## 🎯 Objetivo
Garantir que a aplicação seja totalmente acessível para pessoas cegas e com deficiência visual, utilizando leitores de tela como **TalkBack** (Android) e **VoiceOver** (iOS).

## ✅ Melhorias Implementadas

### 1. Labels Descritivos
Todos os elementos interativos possuem `accessibilityLabel` que descreve claramente seu propósito:
```javascript
<Pressable
  accessible={true}
  accessibilityLabel="Reproduzir capítulo"
  accessibilityRole="button"
>
```

### 2. Hierarquia Semântica
Títulos e seções usam `accessibilityRole="header"` para estruturação clara:
```javascript
<Text accessibilityRole="header" accessibilityLabel="Audiolivros Gratuitos">
  Audiolivros gratuitos
</Text>
```

### 3. Instruções com Hints
Campos possuem `accessibilityHint` para explicar o resultado da ação:
```javascript
<Pressable
  accessibilityHint="Toque para ver os capítulos disponíveis"
>
```

### 4. Estado dos Controles
Botões e controles informam seu estado:
```javascript
<Pressable
  accessibilityState={{ disabled: !current }}
  accessibilityLabel={current ? "Reproduzir" : "Reproduzir (desabilitado)"}
>
```

### 5. Elementos Decorativos Ocultos
Ícones e elementos visuais são marcados como inacessíveis:
```javascript
<Image
  accessible={false}
  importantForAccessibility="no"
/>
```

## 🔧 Como Testar a Acessibilidade

### Android (TalkBack)
1. Abra **Configurações > Acessibilidade > TalkBack**
2. Ative o TalkBack
3. Toque na tela para ouvir descrições
4. Deslize com dois dedos para navegar

### iOS (VoiceOver)
1. Abra **Configurações > Acessibilidade > VoiceOver**
2. Ative o VoiceOver
3. Toque para ouvir descrições
4. Deslize com duas dedos em Z para navegar

## 📋 Checklist para Novos Componentes

Ao criar novos componentes, siga este checklist:

- [ ] Componentes interativos têm `accessible={true}`
- [ ] Todos têm `accessibilityLabel` descritivo
- [ ] Botões têm `accessibilityRole="button"`
- [ ] Títulos têm `accessibilityRole="header"`
- [ ] Ações complexas têm `accessibilityHint`
- [ ] Elementos decorativos têm `accessible={false}`
- [ ] Listas têm labels e hints de navegação
- [ ] Estados (desabilitado, selecionado) são comunicados

## 💡 Exemplos de Boas Práticas

### ✅ Botão Bem Acessível
```javascript
<Pressable
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Adquirir Livros"
  accessibilityHint="Abre o WhatsApp para iniciar contato"
  onPress={handlePress}
>
  <Text>Adquirir</Text>
</Pressable>
```

### ✅ Lista Bem Acessível
```javascript
<FlatList
  accessible={true}
  accessibilityLabel="Lista de capítulos"
  accessibilityHint="Deslize para ver todos os capítulos"
  data={chapters}
  renderItem={...}
/>
```

### ✅ Card com Imagem
```javascript
<View
  accessible={true}
  accessibilityLabel="Título do Livro"
  accessibilityHint="Descrição breve"
>
  <Image accessible={false} />
  <Text accessible={false} />
</View>
```

## 🚫 Erros Comuns a Evitar

### ❌ Falta de Label
```javascript
<Pressable onPress={handlePress}>
  <Image source={icon} />
</Pressable>
// Leitor de tela: "Botão" (sem contexto)
```

### ❌ Labels Genéricos
```javascript
<Pressable accessibilityLabel="Botão" />
// Leitor de tela: "Botão" (não informa ação)
```

### ❌ Elementos Decorativos Acessíveis
```javascript
<Text accessible={true}>{separator}</Text>
// Leitor de tela lê separadores desnecessários
```

### ❌ Falta de Instruções
```javascript
<Pressable accessibilityLabel="Download" />
// Leitor de tela não explica o que vai acontecer
```

## 📚 Recursos Úteis

- [React Native Accessibility Documentation](https://reactnative.dev/docs/accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Android Accessibility Documentation](https://developer.android.com/guide/topics/ui/accessibility)
- [iOS Accessibility Documentation](https://developer.apple.com/accessibility/)

## 🔄 Manutenção Contínua

- Teste regularmente com leitores de tela habilitados
- Revise novos recursos antes de publicar
- Colete feedback de usuários com deficiência visual
- Mantenha labels atualizados conforme o conteúdo muda
- Documente decisões de acessibilidade complexas

## 📞 Suporte e Feedback

Se encontrar problemas com acessibilidade:
1. Teste com o leitor de tela ativado
2. Documente o problema e o componente afetado
3. Compare com os padrões deste guia
4. Solicite revisão de pares

---
**Última atualização**: 12 de março de 2026
**Status**: ✅ Acessibilidade implementada e testada
