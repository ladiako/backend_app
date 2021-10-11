package com.project.re.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name="client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String nom;
}
