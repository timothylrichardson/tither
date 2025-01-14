package org.mt_pilgrim.tither.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

  private String email;
  private String password;
  private String firstName;
  private String lastName;
  private String phoneNumber;
  private String userName;
  private String enabled;

  @ManyToMany(fetch = FetchType.EAGER, cascade =  CascadeType.ALL)
  @JoinTable(
          name = "users_roles",
          joinColumns = @JoinColumn(
                  name = "user_id"),
          inverseJoinColumns = @JoinColumn(
                  name = "role_id"))
  private Collection<Role> roles;
}
