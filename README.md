# Lab 11 - React Native Fundamentals

**Student Name:** Бексұлтан  
**Date:** 27.03.2026

---

## Lab 11.1 - Expo Setup and Core Components

### What was built:
- ProfileCard component with avatar, name, role, bio
- ContactSection component with email, phone, message inputs

### React Native vs React (Web):

| Aspect | React (Web) | React Native |
|--------|-------------|--------------|
| Renderer | DOM | Native components |
| Container | div | View |
| Text | p, span | Text |
| Styling | CSS classes | StyleSheet API |
| Layout | CSS Flexbox | StyleSheet Flexbox |
| Button | onClick | onPress |
| Lists | map() | FlatList |

---

## Lab 11.2 - Lists, Navigation, and Platform-Specific Code

### What was built:
- Product list screen with FlatList
- Product detail screen
- Navigation between screens using React Navigation
- Platform-specific styling (iOS vs Android)
- Pull-to-refresh functionality

### Navigation Setup:
- Used `@react-navigation/native` and `@react-navigation/native-stack`
- `NavigationContainer` wraps the entire app
- `Stack.Navigator` manages screen history
- `Stack.Screen` defines each screen

### Core Components Used:
- `View` - container (like div)
- `Text` - text display
- `Image` - image display
- `TextInput` - user input
- `FlatList` - efficient list rendering
- `TouchableOpacity` - pressable button
- `ScrollView` - scrollable container
- `StyleSheet` - styling API